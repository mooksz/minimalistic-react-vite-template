import { Route, Routes } from 'react-router';

import { MainLayout } from '@/layouts/temp-MainLayout';

import { HomePage } from '@/routes';
import { AnotherPage } from '@/routes/another-page';

function App() {
    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="another-page" element={<AnotherPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
