import { Link, Outlet } from 'react-router-dom';
import { Container } from './Layout.styles';

export const Layout = () => {
    return (
        <>
            <header>
                <p>Header</p>
                <Link to="/">Home Page</Link>
                <Link to="/animes">Anime</Link>
            </header>
            <Container>
                <Outlet />
            </Container>
            <footer>footer</footer>
        </>
    );
};
