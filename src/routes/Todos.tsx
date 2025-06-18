import { Button } from '@/components/button/Button';
import { useTodos } from '@/hooks/useTodos';

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
        <>
            This is the todos page <br />
            <pre>
                <code>{JSON.stringify(data, null, 2)}</code>
            </pre>
            <Button tagName="a" href="/">
                Go to home page
            </Button>
        </>
    );
}
