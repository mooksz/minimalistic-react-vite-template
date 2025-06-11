export const devConsole = {
    log: (...args: unknown[]) => {
        if (import.meta.env.DEV) console.log(...args);
    },
    warn: (...args: unknown[]) => {
        if (import.meta.env.DEV) console.warn(...args);
    },
    error: (...args: unknown[]) => {
        if (import.meta.env.DEV) console.error(...args);
    },
    info: (...args: unknown[]) => {
        if (import.meta.env.DEV) console.info(...args);
    },
    debug: (...args: unknown[]) => {
        if (import.meta.env.DEV) console.debug(...args);
    },
    trace: (...args: unknown[]) => {
        if (import.meta.env.DEV) console.trace(...args);
    },
    group: (...args: unknown[]) => {
        if (import.meta.env.DEV) console.group(...args);
    },
    groupCollapsed: (...args: unknown[]) => {
        if (import.meta.env.DEV) console.groupCollapsed(...args);
    },
    groupEnd: () => {
        if (import.meta.env.DEV) console.groupEnd();
    },
    table: (tabularData?: unknown, properties?: string[]) => {
        if (import.meta.env.DEV) console.table(tabularData, properties);
    },
};
