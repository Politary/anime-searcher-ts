import { Link, useMatch } from 'react-router-dom';
import { AppProps } from '../../../../types/types';

export const CustomLink: React.FC<AppProps> = ({ children, to, ...props }) => {
    const match = useMatch(to as string);

    return (
        <Link
            to={to as string}
            style={{ color: match ? '#D24C00' : '#616C7A' }}
            {...props}
        >
            {children}
        </Link>
    );
};
