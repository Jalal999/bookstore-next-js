import styled from 'styled-components';
import { Card, Box, Divider } from '@mui/material';


export const Item = styled(Card)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    margin: 5px 10px;
`


export const ItemDesc = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
`

export const Checkout = styled.div`
    padding: 0 5px;
`

export const OrderDesc = styled.div`
    padding: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px
`

export const BreakLine = styled(Divider)`
    margin: 15px 0;
`
