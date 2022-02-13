import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { AnimesPage } from './pages/AnimesPage/AnimesPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

import { Layout } from './components/Layout/Layout';
import { TitlePage } from './pages/TitlePage/TitlePage';
import { FavoritesPage } from './pages/FavotitesPage/FavoritesPage';

const routes = {
    path: '/',
    element: <Layout />,
    children: [
        {
            index: true,
            path: '',
            element: <HomePage />,
        },
        {
            index: false,
            path: 'animes',
            element: <AnimesPage />,
        },
        {
            index: false,
            path: 'animes/:id/',
            element: <TitlePage />,
        },
        {
            index: false,
            path: 'favorites/',
            element: <FavoritesPage />,
        },
        {
            index: false,
            path: '*',
            element: <NotFoundPage />,
        },
    ],
};

function App() {
    return (
        <>
            <Routes>
                <Route path={routes.path} element={routes.element}>
                    {routes.children.map(({ index, path, element }) => (
                        <Route
                            index={index}
                            path={path}
                            element={element}
                            key={path}
                        />
                    ))}
                </Route>
            </Routes>
        </>
    );
}

export default App;
