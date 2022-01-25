import styled from 'styled-components/macro';

export const StyledCard = styled.div`
    position: relative;
    flex-grow: 1;
    background-color: lightblue;
    margin: 1rem;
    width: 150.156px;
`;

export const ImageContainer = styled.div`
    position: relative;
    min-height: 200px;
    max-height: 200px;
    background-image: linear-gradient(
        to bottom,
        rgba(245, 246, 252, 0.52),
        rgba(117, 19, 93, 0.73)
    );
    img {
        background: linear-gradient(
            to bottom,
            rgba(255, 0, 0, 0.5),
            rgba(255, 0, 0, 0),
            transparent
        );
        height: 200px;
        min-height: 100%;
        max-height: 100%;
        min-width: 100%;
        max-width: 100%;
        object-fit: cover;
    }
`;

export const Title = styled.div`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
`;

export const Details = styled.div`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
`;

export const SvgContainer = styled.div`
    //position: absolute;
    //right: 0;
    //top: 0;
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
    color: white;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;
`;
