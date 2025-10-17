import { Outlet } from 'react-router';

export function MainLayout() {
    return (
        <>
            <header>Header</header>
            <Outlet />
            <footer>Footer</footer>
        </>
    );
}
