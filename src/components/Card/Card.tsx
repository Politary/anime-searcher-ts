import { StyledCard } from './Card.styles';
import { Link } from 'react-router-dom';

export const Card = ({ title }) => {
    return (
        <StyledCard>
            <Link to="/animes/titleName">{title}</Link>
        </StyledCard>
    );
};
