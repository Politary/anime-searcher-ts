import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage.tsx';
import { TitlePage } from './pages/TitlePage/TitlePage.tsx';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage.tsx';

import { Layout } from './components/Layout/Layout.tsx';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/title" element={<TitlePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
