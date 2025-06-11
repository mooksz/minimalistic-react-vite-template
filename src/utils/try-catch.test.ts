import { describe, it, expect } from 'vitest';
import { tryCatch } from './try-catch';

describe('tryCatch', () => {
    it('should return result for a successful sync function', async () => {
        const syncFn = (a: number, b: number) => a + b;
        const [err, result] = await tryCatch(syncFn, 2, 3);

        expect(err).toBeNull();
        expect(result).toBe(5);
    });

    it('should return error for a throwing sync function', async () => {
        const throwingFn = () => {
            throw new Error('Sync error');
        };
        const [err, result] = await tryCatch(throwingFn);

        expect(err).toBeInstanceOf(Error);
        expect(err?.message).toBe('Sync error');
        expect(result).toBeNull();
    });

    it('should return result for a successful async function', async () => {
        const asyncFn = async (name: string) => {
            return new Promise(resolve => {
                resolve(`Hello, ${name}`);
            });
        };
        const [err, result] = await tryCatch(asyncFn, 'Alice');

        expect(err).toBeNull();
        expect(result).toBe('Hello, Alice');
    });

    it('should return error for a rejecting async function', async () => {
        const rejectingFn = async () => {
            return new Promise((_, reject) => {
                reject(new Error('Async error'));
            });
        };
        const [err, result] = await tryCatch(rejectingFn);

        expect(err).toBeInstanceOf(Error);
        expect(err?.message).toBe('Async error');
        expect(result).toBeNull();
    });
});
