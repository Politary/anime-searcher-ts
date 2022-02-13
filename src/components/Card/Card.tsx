import {
    Details,
    Favorite,
    ImageContainer,
    Rating,
    RatingText,
    StyledCard,
    SvgContainer,
    Title,
} from './Card.styles';
import { Link } from 'react-router-dom';

import { ReactComponent as HeartOutlined } from '../../assets/images/svg/heart-outlined.svg';
import { ReactComponent as HeartFilled } from '../../assets/images/svg/heart-filled.svg';
import { ReactComponent as StarFilled } from '../../assets/images/svg/star-filled.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
    addToFavorites,
    removeFromFavorites,
    filterFavorites,
    favoritesSelector,
} from '../../store/favorites/favorites.slice';
import { TitleObjectMin } from '../../types/titleTypes';

export const Card: React.FC<TitleObjectMin> = ({
    title,
    images,
    score,
    type,
    duration,
    mal_id,
}) => {
    const favorites = useSelector(favoritesSelector);
    const dispatch = useDispatch();

    const handleFavoritesChange = () => {
        !favorites.list.filter((item: TitleObjectMin) => item.mal_id === mal_id)
            .length
            ? dispatch(
                  addToFavorites({
                      title,
                      images,
                      score,
                      type,
                      duration,
                      mal_id,
                  })
              )
            : dispatch(
                  removeFromFavorites({
                      title,
                      images,
                      score,
                      type,
                      duration,
                      mal_id,
                  })
              );
        dispatch(filterFavorites(favorites.options));
    };

    let favoritesSvg;

    if (
        !favorites.list.filter((item: TitleObjectMin) => item.mal_id === mal_id)
            .length
    ) {
        favoritesSvg = (
            <SvgContainer onClick={handleFavoritesChange}>
                <HeartOutlined
                    fill="red"
                    width="30px"
                    height="30px"
                    z-index="100"
                />
            </SvgContainer>
        );
    } else {
        favoritesSvg = (
            <SvgContainer onClick={handleFavoritesChange}>
                <HeartFilled
                    fill="red"
                    width="30px"
                    height="30px"
                    z-index="100"
                />
            </SvgContainer>
        );
    }

    return (
        <StyledCard>
            <Favorite>{favoritesSvg}</Favorite>
            <Link key={mal_id} to={`/animes/${mal_id}`}>
                <ImageContainer image={images?.jpg.image_url}>
                    {score ? (
                        <Rating>
                            <StarFilled fill="#FFCA62" />
                            <RatingText>{`${(0.5 * score).toFixed(
                                1
                            )}/5`}</RatingText>
                        </Rating>
                    ) : null}
                </ImageContainer>
                <Title>{title}</Title>
                <Details>{`${type} • ${duration}`}</Details>
            </Link>
        </StyledCard>
    );
};
