type SuccessResult<T> = readonly [null, T];
type ErrorResult<E extends Error = Error> = readonly [E, null];
type Result<T, E extends Error = Error> = SuccessResult<T> | ErrorResult<E>;

/**
 * Overload 1: Wrap a promise
 */
export function tryCatch<T, E extends Error = Error>(input: Promise<T> | T): Promise<Result<T, E>>;

/**
 * Overload 2: Wrapp a function with possible arguments
 */
export function tryCatch<Args extends unknown[], T, E extends Error = Error>(
    fn: (...args: Args) => Promise<T> | T,
    ...args: Args
): Promise<Result<T, E>>;

/**
 * Implementation: Detect if first argument is a promise or a callback
 * based on conclusion either wait for it or call it
 */
export async function tryCatch(...args: unknown[]): Promise<Result<unknown>> {
    try {
        const isFunction = typeof args[0] === 'function';

        if (isFunction) {
            const result = await (args[0] as (...args: unknown[]) => unknown)(...args.slice(1));
            return [null, result] as const;
        }

        const result = await args[0];
        return [null, result] as const;
    } catch (e) {
        const error = e instanceof Error ? e : new Error(String(e));
        return [error, null] as const;
    }
}
