import { todoSchema, type Todo } from '@/features/todos/types/todo';
import type { QueryFunction } from '@tanstack/react-query';

export const fetchTodos: QueryFunction<Todo[], [string, number]> = async ({ signal, queryKey }) => {
    const [, amount] = queryKey;
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=1&_per_page=${amount}`, { signal });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json: unknown = await response.json();
    return todoSchema.array().parse(json);
};
