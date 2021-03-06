import styled from 'styled-components/macro';

export const HeaderWrapper = styled.header`
    z-index: 999;
`;

export const HeaderBody = styled.div`
    padding: 2.625rem 0;
    margin: 0 auto;
    max-width: 1146px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderLinkContainer = styled.div`
    display: flex;
`;

export const HeaderLink = styled.div`
    display: flex;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: #616c7a;
    margin: 0 1.5rem;
`;

export const HeaderText = styled.span`
    margin-left: 0.5rem;
`;
