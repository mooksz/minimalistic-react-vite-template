import { fetchTodos } from '@/queries/todos/fetchTodos';
import { useQuery } from '@tanstack/react-query';

export function useTodos(amount = 1) {
    const query = useQuery({
        queryKey: ['todos', amount],
        queryFn: fetchTodos,
    });

    return query;
}
