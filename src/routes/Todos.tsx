import { Button } from '@/components/button/Button';
import { Todos } from '@/features/todos/components/Todos';

export function TodosPage() {
    return (
        <>
            This is the todos page <br />
            <Todos />
            <Button tagName="a" href="/">
                Go to home page
            </Button>
        </>
    );
}
