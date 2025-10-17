import { Route, Routes } from 'react-router';

import { MainLayout } from '@/layouts/main-layout';

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
