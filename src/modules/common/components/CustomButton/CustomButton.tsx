import { AppProps } from '../../../../types/types';

export const CustomButton: React.FC<AppProps> = ({
    handleSubmit,
    children,
}) => {
    return <button onClick={handleSubmit}>{children}</button>;
};
