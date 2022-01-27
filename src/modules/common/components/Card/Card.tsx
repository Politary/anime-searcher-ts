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

//@ts-ignore
import { ReactComponent as HeartOutlined } from '../../../../assets/images/svg/heart-outlined.svg';
//@ts-ignore
import { ReactComponent as HeartActive } from '../../../../assets/images/svg/heart-active.svg';
//@ts-ignore
import { ReactComponent as StarFilled } from '../../../../assets/images/svg/star-filled.svg';
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
    score,
    type,
    duration,
    mal_id,
}) => {
    const favorites = useSelector((state: RootState) => state.favorites);
    const dispatch = useDispatch();

    const handleAddToFavorites = () => {
        dispatch(
            addToFavorites({ title, images, score, type, duration, mal_id })
        );
    };

    return (
        <StyledCard>
            <Favorite>
                {
                    //@ts-ignore
                    !favorites.list.filter((item) => item.mal_id === mal_id)
                        .length ? (
                        <SvgContainer onClick={handleAddToFavorites}>
                            <HeartOutlined
                                fill="red"
                                width="30px"
                                height="30px"
                                z-index="100"
                            />
                        </SvgContainer>
                    ) : (
                        <SvgContainer>
                            <HeartActive
                                fill="red"
                                width="30px"
                                height="30px"
                                z-index="100"
                            />
                        </SvgContainer>
                    )
                }
            </Favorite>
            <Link key={mal_id} to={`/animes/${mal_id}`}>
                <ImageContainer>
                    <img src={`${images?.jpg.image_url}`} alt="titleImage" />
                    {score ? (
                        <Rating>
                            <StarFilled fill="#FFCA62" />
                            <RatingText>{`${score?.toFixed(1)}/10`}</RatingText>
                        </Rating>
                    ) : null}
                </ImageContainer>
                <Title>{title}</Title>
                <Details>{`${type} • ${duration}`}</Details>
            </Link>
        </StyledCard>
    );
};
