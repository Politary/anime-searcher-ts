import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styles';
import { CustomLink } from '../CustomLink/CustomLink';

export const Layout = () => {
    return (
        <>
            <header>
                <p>Header</p>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/animes">Anime</CustomLink>
                <CustomLink to="/search">Search</CustomLink>
            </header>
            <Container>
                <Outlet />
            </Container>
            <footer>footer</footer>
        </>
    );
};
