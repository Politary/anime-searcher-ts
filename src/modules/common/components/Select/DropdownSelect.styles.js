import styled from 'styled-components/macro';

export const DropdownHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    width: 165px;
    padding: 1rem 1.5rem;
    border: 1px solid #dddddd;
    border-radius: 100rem;
    background-color: white;
    box-sizing: border-box;
`;

export const DropdownBody = styled.div`
    z-index: 300;
    margin-top: 0.75rem;
    position: absolute;
    background-color: white;
    width: 200px;
    padding: 1rem 0.75rem;
    border-radius: 0.75rem;
    filter: drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.3));
    left: ${(props) =>
        props.bodyPosition.left +
        -((200 - props.bodyPosition.width) / 2) +
        'px'};
    box-sizing: border-box;
`;

export const DropdownContainer = styled.div`
    font-family: 'Be Vietnam Pro', sans-serif;
    box-sizing: border-box;
    color: #616c7a;
`;

export const DropdownItem = styled.option`
    //font-family: 'Be Vietnam Pro', sans-serif;
    cursor: pointer;
`;
