import styled from 'styled-components';

export const DefaultMenuDiv = styled.div`
    overflow: hidden;
    height: 115px;
`

export const DefaultMenuUl = styled.ul`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`

export const DefaultMenuLink = styled.li`
    font-size: 1rem;
    font-weight: 400;
    text-transform: capitalize;
    display: block;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid white;

    & a:hover {
        padding-left: 1.5rem;
    }
`