export async function tryCatch<Args extends unknown[], Return>(
    fn: (...args: Args) => Promise<Return> | Return,
    ...args: Args
): Promise<[Error | null, Awaited<Return> | null]> {
    try {
        const result = await fn(...args);

        return [null, result];
    } catch (e) {
        return [e instanceof Error ? e : new Error(String(e)), null];
    }
}
