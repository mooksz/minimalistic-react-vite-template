import { describe, it, vi, afterEach, expect, beforeAll, afterAll } from 'vitest';
import { devConsole } from './dev-console';

const testMethods = [
    'log',
    'warn',
    'error',
    'info',
    'debug',
    'trace',
    'group',
    'groupCollapsed',
    'groupEnd',
    'table',
] as const;

describe('devConsole', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    describe('when in development mode', () => {
        beforeAll(() => {
            vi.stubEnv('DEV', true);
        });

        afterAll(() => {
            vi.unstubAllEnvs();
        });

        testMethods.forEach(method => {
            it(`should call console.${method} when devConsole.${method} is used`, () => {
                const spy = vi.spyOn(console, method).mockImplementation(() => {});

                const args = ['test', 123];

                devConsole[method](args);

                expect(spy).toHaveBeenCalledOnce();

                if (method === 'groupEnd') {
                    expect(spy).toHaveBeenCalled();
                    return;
                }

                if (method === 'table') {
                    expect(spy).toHaveBeenCalledWith(args, undefined);
                    return;
                }

                expect(spy).toHaveBeenCalledWith(args);
            });
        });
    });

    describe('when in production mode it', () => {
        beforeAll(() => {
            vi.stubEnv('DEV', false);
        });

        afterAll(() => {
            vi.unstubAllEnvs();
        });

        testMethods.forEach(method => {
            it(`should NOT call console.${method} when devConsole.${method} is used`, () => {
                const spy = vi.spyOn(console, method).mockImplementation(() => {});

                const args = ['test', 123];

                devConsole[method](args);

                expect(spy).not.toHaveBeenCalled();
            });
        });
    });
});
