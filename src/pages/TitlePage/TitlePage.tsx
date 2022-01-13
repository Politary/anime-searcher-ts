import { useParams } from 'react-router-dom';

export const TitlePage = () => {
    const { title } = useParams();
    return (
        <div>
            <p>{title}</p>
        </div>
    );
};
