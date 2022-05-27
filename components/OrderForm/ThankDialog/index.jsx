import { useState } from "react";
import { Typography } from '@mui/material';
import { PopUp, DialogLink } from "./ThankDialogStyle";
import Link from 'next/link'

const ThankDialog = ({ showDialog }) => {
    const [open, setOpen] = useState(showDialog);

    const handleClose = () => {
        setOpen(false)
    }

    return (
            <PopUp onClose={handleClose} open={open}>
                <Typography variant="h5" gutterBottom component="div">
                    Thank you for your order!
                </Typography>
                <DialogLink variant="contained"><Link href='/'>Homepage</Link></DialogLink>
            </PopUp>
    )
}

export default ThankDialog;