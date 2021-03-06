import styled from 'styled-components/macro';
import { dropdownBodyPosition } from '../../utils/dropDownBodyPosition';

export const DropdownHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    width: 165px;
    padding: 13px 1.5rem;
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
        dropdownBodyPosition(props.bodyPosition.left, props.bodyPosition.width)}
    box-sizing: border-box;
`;

export const DropdownContainer = styled.div`
    box-sizing: border-box;
    color: #616c7a;
`;

export const DropdownItem = styled.option`
    padding: 0.5rem 0.75rem;
    cursor: pointer;
    color: ${(props) =>
        props.activeValue === props.value ? '#D24C00' : 'inherit'};
    background-color: ${(props) =>
        props.activeValue === props.value ? '#FFF0E8' : 'transparent'};
`;
