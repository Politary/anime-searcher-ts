import styled from 'styled-components/macro';

export const HeroContainer = styled.div`
    left: 0;
    width: 100%;
    height: 640px;
    margin-top: -120px;
    background-image: ${(props) =>
        props.image ? `url(${props.image})` : 'none'};
`;

export const Tools = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
