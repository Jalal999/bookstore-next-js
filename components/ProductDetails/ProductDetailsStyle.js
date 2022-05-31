import { Card, CardContent, Typography, Button } from '@mui/material';
import styled from 'styled-components';

export const ProductCard = styled(Card)`
    margin: 5px 20px;
    maxWidth: 500px;
    padding: 5px;
`;


export const ProductHeading = styled(Typography)`
    text-align: center;
    font-size: 20px;
`;


export const ProductAmount = styled(Card)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    margin-top: 15px;
`;

export const Amount = styled.div`
    max-width: 55px;
`

export const PriceRate = styled.div`
    text-align: center;
`

export const AddButton = styled(Button)`
    width: 100%;
`

export const ProductDesc = styled(Typography)`
    text-align: center;
`