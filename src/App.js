import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage.tsx';
import { AnimesPage } from './pages/AnimesPage/AnimesPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage.tsx';

import { Layout } from './components/Layout/Layout.tsx';
import { TitlePage } from './pages/TitlePage/TitlePage';
import { SearchPage } from './pages/SearchPage/SearchPage';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="animes" element={<AnimesPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="animes/:id/" element={<TitlePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
