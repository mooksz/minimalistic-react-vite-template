import { Route, Routes } from 'react-router';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './routes';
import { TodosPage } from './routes/Todos';

function App() {
    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="another-page" element={<TodosPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
