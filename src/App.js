import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage.tsx';
import { AnimesPage } from './pages/AnimesPage/AnimesPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage.tsx';

import { Layout } from './modules/layout/components/Layout/Layout.tsx';
import { TitlePage } from './pages/TitlePage/TitlePage';
import { SearchPage } from './pages/SearchPage/SearchPage';

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
            path: 'search',
            element: <SearchPage />,
        },
        {
            index: false,
            path: 'animes/:id/',
            element: <TitlePage />,
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