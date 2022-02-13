import styled from 'styled-components/macro';

export const PaginationButton = styled.button`
    cursor: pointer;
    margin: 1rem;
    width: 32px;
    height: 32px;
    border-radius: 1000rem;
    border: 1px solid #dddddd;
    background: transparent;
    color: #dddddd;
`;

export const PaginationList = styled.ul`
    padding-inline-start: 0;
    list-style-type: none;
    display: flex;
    font-size: 13px;
    font-weight: 600;
`;

export const PaginationItem = styled.li`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 1000rem;
    border: none;
    text-decoration: none;
    color: ${(props) => (props.active ? '#D24C00' : 'black')};
    background-color: ${(props) => (props.active ? '#FFF0E8' : 'transparent')};
`;

export const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
