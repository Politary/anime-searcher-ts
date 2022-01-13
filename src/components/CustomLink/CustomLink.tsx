import { Link, useMatch } from 'react-router-dom';
import { AppProps } from '../../types/types';

export const CustomLink: React.FC<AppProps> = ({ children, to, ...props }) => {
    const match = useMatch(to);
    // console.log(match);

    return (
        <Link to={to} style={{ color: match ? 'red' : 'black' }} {...props}>
            {children}
        </Link>
    );
};
