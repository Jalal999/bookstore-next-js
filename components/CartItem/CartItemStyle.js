import { Button, Card, Divider } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';

export const Item = styled(Card)`
    display: flex;
    padding: 5px;
    margin: 5px 10px;
`

export const ItemDesc = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
`

export const ItemAmount = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin-top: 30px;
`

export const BreakLine = styled(Divider)`
    margin: 30px 0;
`

export const CheckoutBtn = styled(Button)`
    width: 100%;
`