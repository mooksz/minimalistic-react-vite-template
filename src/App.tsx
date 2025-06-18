import { useTodos } from './hooks/useTodos';

function App() {
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
            <pre>
                <code>{JSON.stringify(data, null, 2)}</code>
            </pre>
        </>
    );
}

export default App;
