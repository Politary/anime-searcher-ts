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
    const addToFav = (e: any) => {
        // @ts-ignore
        let data = localStorage.getItem('favorites');

        //@ts-ignore
        data ? JSON.parse(data) : [];

        data.push(mal_id);

        localStorage.setItem(
            'favorites',
            // @ts-ignore
            JSON.stringify(localStorage.favorites, mal_id)
        );
        console.log(localStorage);
    };

    return (
        <StyledCard>
            <SvgContainer onClick={addToFav}>
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
