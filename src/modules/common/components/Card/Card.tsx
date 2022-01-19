import { ImageContainer, StyledCard, SvgContainer, Title } from './Card.styles';
import { Link } from 'react-router-dom';
import { AnimeDetails } from '../../../../types/types';

//@ts-ignore
import { ReactComponent as Star } from '../../../../assets/images/svg/star.svg';

export const Card: React.FC<Partial<AnimeDetails>> = ({
    title,
    image_url,
    mal_id,
}) => {
    return (
        <StyledCard>
            <Link key={mal_id} to={`/animes/${mal_id}`}>
                <ImageContainer>
                    <SvgContainer>
                        <Star width="30px" height="30px" z-index="100" />
                    </SvgContainer>
                    <img src={`${image_url}`} alt="titleImage" />
                </ImageContainer>
                <Title>{title}</Title>
            </Link>
        </StyledCard>
    );
};
