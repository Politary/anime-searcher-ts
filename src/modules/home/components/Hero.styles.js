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
    max-width: 1146px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 13rem;
    h3 {
        height: 240px;
        margin-top: 0;
        margin-bottom: 1rem;
        color: white;
        font-size: 64px;
        font-weight: 700;
        overflow-wrap: break-word;
        line-height: 80.96px;
        width: 620px;
    }
`;

export const Details = styled.span`
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    color: #9098a2;
`;

export const StyledButton = styled.button`
    cursor: pointer;
    padding: 1rem 2rem;
    border-radius: 28px;
    background-color: #d24c00;
    color: white;
    border: none;
    font-family: Be Vietnam Pro, sans-serif;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: 0.5px;
`;

export const Tools = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 3rem;
`;

export const Dots = styled.div`
    display: flex;
    align-items: center;
`;
export const DotContainer = styled.div`
    margin: 2px;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const Arrows = styled.div`
    display: flex;
`;
export const Arrow = styled.div`
    cursor: pointer;
    margin: 0.5rem;
`;
