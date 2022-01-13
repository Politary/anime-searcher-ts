import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styles';
// @ts-ignore
import { CustomLink } from '../CustomLink/CustomLink.tsx';

export const Layout = () => {
    return (
        <>
            <header>
                <p>Header</p>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/animes">Anime</CustomLink>
            </header>
            <Container>
                <Outlet />
            </Container>
            <footer>footer</footer>
        </>
    );
};
