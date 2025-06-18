import { Route, Routes } from 'react-router';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './routes/Home';
import { AnotherPage } from './routes/AnotherPage';

function App() {
    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="another-page" element={<AnotherPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
