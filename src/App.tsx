import { Route, Routes } from 'react-router';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './routes/Home';
import { Todos } from './routes/Todos';

function App() {
    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="another-page" element={<Todos />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
