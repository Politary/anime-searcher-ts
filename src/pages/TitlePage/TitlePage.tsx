import { useParams } from 'react-router-dom';

export const TitlePage = () => {
    const { id } = useParams();
    return <p>{id}</p>;
};
