import { Button } from '@/components/button/Button';

export function AnotherPage() {
    return (
        <>
            This is another page <br />
            <Button tagName="a" href="/">
                Go to another page
            </Button>
        </>
    );
}
