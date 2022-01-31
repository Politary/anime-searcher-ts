import styled from 'styled-components/macro';

export const StyledCard = styled.div`
    font-family: Be Vietnam Pro, sans-serif;
    font-weight: 600;
    position: relative;
    flex-grow: 1;
    margin: 1rem;
    width: 166px;
`;

export const ImageContainer = styled.div`
    position: relative;
    min-height: 234px;
    max-height: 234px;
    img {
        height: 234px;
        min-height: 100%;
        max-height: 100%;
        min-width: 100%;
        max-width: 100%;
        object-fit: cover;
    }
    background-position: center;
    background-size: cover;
    background-image: ${(props) =>
        props.image
            ? `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%), url(${props.image})`
            : 'none'};
`;

export const Title = styled.div`
    font-size: 14px;
    color: black;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
    margin-top: 0.5rem;
`;

export const Details = styled.div`
    color: #616c7a;
    font-size: 12px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
`;

export const SvgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Favorite = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
`;

export const Rating = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
`;

export const RatingText = styled.span`
    font-family: DM Sans, sans-serif;
    color: white;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;
`;
