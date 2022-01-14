import styled from 'styled-components/macro';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: ${(props) => (props.wrapOption ? 'wrap' : 'nowrap')};
`;
