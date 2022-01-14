import { ImageContainer, StyledCard, Title } from './Card.styles';
import { Link } from 'react-router-dom';
import { AnimeDetails } from '../../types/types';

export const Card: React.FC<AnimeDetails> = ({ title, image_url }) => {
    return (
        <StyledCard>
            <Link to={`/animes/${title}`}>
                <ImageContainer>
                    <img src={`${image_url}`} alt="titleImage" />
                </ImageContainer>
                <Title>{title}</Title>
            </Link>
        </StyledCard>
    );
};
