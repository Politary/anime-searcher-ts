import { AppProps } from '../../../../types/types';

export const SearchButton: React.FC<AppProps> = ({
    handleSubmit,
    children,
}) => {
    return <button onClick={handleSubmit}>{children}</button>;
};
