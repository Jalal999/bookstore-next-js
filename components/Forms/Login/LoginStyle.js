import styled from 'styled-components';
import { Button, TextField, Typography } from "@mui/material";

export const Form = styled.form`
    padding-top: 20px;
    text-align: center;
`

export const Input = styled(TextField)`
    margin: 5px 0;
    padding: 0;
`

export const LoginBtn = styled(Button)`
    width: 100%;
`

export const FormHeading = styled(Typography)`
    text-align: center;
    margin-bottom: 0;
`
