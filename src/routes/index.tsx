import { Button } from '@/components/button/temp-Button';

export function HomePage() {
    return (
        <>
            This is home <br />
            <Button tagName="a" href="/another-page">
                Go to another page
            </Button>
        </>
    );
}
