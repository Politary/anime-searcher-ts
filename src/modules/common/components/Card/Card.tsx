import { ImageContainer, StyledCard, SvgContainer, Title } from './Card.styles';
import { Link } from 'react-router-dom';
import { AnimeDetails } from '../../../../types/types';

//@ts-ignore
import { ReactComponent as Star } from '../../../../assets/images/svg/star.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/root.reducer';
import { addToFavorites } from '../../../../store/favorites/favorites.slice';

export const Card: React.FC<Partial<AnimeDetails>> = ({
    title,
    image_url,
    mal_id,
}) => {
    const dispatch = useDispatch();

    const handleAddToFavorites = () => {
        dispatch(addToFavorites(mal_id));
    };

    return (
        <StyledCard>
            <SvgContainer onClick={handleAddToFavorites}>
                <Star width="30px" height="30px" z-index="100" />
            </SvgContainer>
            <Link key={mal_id} to={`/animes/${mal_id}`}>
                <ImageContainer>
                    <img src={`${image_url}`} alt="titleImage" />
                </ImageContainer>
                <Title>{title}</Title>
            </Link>
        </StyledCard>
    );
};
