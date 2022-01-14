import { ImageContainer, StyledCard, Title } from './Card.styles';
import { Link } from 'react-router-dom';
import { AnimeDetails } from '../../types/types';

export const Card: React.FC<AnimeDetails> = ({ title, image_url, mal_id }) => {
    return (
        <StyledCard>
            <Link key={mal_id} to={`/animes/${mal_id}`}>
                <ImageContainer>
                    <img
                        src={`${image_url}`}
                        alt="titleImage"
                        id={mal_id!.toString()}
                    />
                </ImageContainer>
                <Title>{title}</Title>
            </Link>
        </StyledCard>
    );
};
