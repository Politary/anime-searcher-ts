import { StyledCard } from './Card.styles';
import { Link } from 'react-router-dom';
import { AnimeDetails } from '../../types/types';

export const Card: React.FC<AnimeDetails> = ({ title }) => {
    return (
        <StyledCard>
            <Link to={`/animes/${title}`}>{title}</Link>
        </StyledCard>
    );
};
