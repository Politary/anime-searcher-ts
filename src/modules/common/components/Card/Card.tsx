import { ImageContainer, StyledCard, SvgContainer, Title } from './Card.styles';
import { Link } from 'react-router-dom';

//@ts-ignore
import { ReactComponent as Star } from '../../../../assets/images/svg/star.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
    addToFavorites,
    removeFromFavorites,
} from '../../../../store/favorites/favorites.slice';
import { TitleObject } from '../../../../types/titleTypes';
import { RootState } from '../../../../store/root.reducer';

export const Card: React.FC<Partial<TitleObject>> = ({
    title,
    images,
    mal_id,
}) => {
    const favorites = useSelector((state: RootState) => state.favorites);
    const dispatch = useDispatch();

    const handleFavoritesChange = () => {
        if (!favorites.list.includes(mal_id)) dispatch(addToFavorites(mal_id));
        else dispatch(removeFromFavorites(mal_id));
    };

    return (
        <StyledCard>
            <SvgContainer onClick={handleFavoritesChange}>
                <Star width="30px" height="30px" z-index="100" />
            </SvgContainer>
            <Link key={mal_id} to={`/animes/${mal_id}`}>
                <ImageContainer>
                    <img src={`${images?.jpg.image_url}`} alt="titleImage" />
                </ImageContainer>
                <Title>{title}</Title>
            </Link>
        </StyledCard>
    );
};
