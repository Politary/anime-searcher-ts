import styled from 'styled-components/macro';

export const StyledCard = styled.div`
    flex-grow: 1;
    background-color: lightblue;
    margin: 0.5rem auto;
    width: 150.156px;
`;

export const ImageContainer = styled.div`
    min-height: 200px;
    max-height: 200px;
    img {
        height: 200px;
        min-height: 100%;
        max-height: 100%;
        min-width: 100%;
        object-fit: cover;
    }
`;

export const Title = styled.span`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
`;
