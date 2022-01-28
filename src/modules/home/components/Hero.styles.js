import styled from 'styled-components/macro';

export const ImageContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 640px;
    background-image: ${(props) =>
        props.image
            ? `radial-gradient(53.59% 53.59% at 67.53% 62.42%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.76) 96.35%), url(${props.image})`
            : 'none'};
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Container = styled.div`
    flex: 1;
    max-width: 1200px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15rem;
    h3 {
        color: white;
        font-size: 64px;
        font-weight: 700;
        overflow-wrap: break-word;
        line-height: 80.96px;
        width: 620px;
    }
`;

export const Tools = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
