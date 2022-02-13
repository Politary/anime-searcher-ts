import styled from 'styled-components/macro';

export const StyledSearchBar = styled.input`
    box-sizing: border-box;
    width: 595px;
    height: 52px;
    border: none;
    border-radius: 999rem;
    background-color: #eff0f2;
    padding: 14px 16px;
    color: #8ca4b3;
    margin: 0 1.5rem;
    &:focus,
    &:active,
    &:focus-visible {
        border: none;
        outline: none;
    }
    ::placeholder {
        font-family: Be Vietnam Pro, sans-serif;
        font-size: 14px;
        font-weight: 500;
    }
`;
