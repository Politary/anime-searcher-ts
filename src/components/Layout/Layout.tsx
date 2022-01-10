import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <header>
                <p>Header</p>
                <Link to="/">Home Page</Link>
                <Link to="/title">Title</Link>
            </header>
            <Outlet />
            <footer>footer</footer>
        </>
    );
};
