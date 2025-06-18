import { useTodos } from '@/features/todos/hooks/useTodos';

export function Todos() {
    const { isLoading, data, error } = useTodos(1);

    if (error) {
        console.log(error);
        return <>Error!</>;
    }

    if (isLoading) {
        return <>Loading</>;
    }

    return (
        <pre>
            <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
    );
}
