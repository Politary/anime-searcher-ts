import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styles';
import { Header } from '../Header/Header';

export const Layout = () => {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <footer>footer</footer>
        </>
    );
};
