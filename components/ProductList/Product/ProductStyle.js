import { Card, CardContent } from '@mui/material';
import styled from 'styled-components';

export const ProductCard = styled(Card)`
    margin: 5px 20px;
    maxWidth: 500px;
    padding: 5px;
`;


export const ProductHeading = styled(CardContent)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

