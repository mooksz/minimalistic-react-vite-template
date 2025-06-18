import { Button } from '@/components/button/Button';

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
