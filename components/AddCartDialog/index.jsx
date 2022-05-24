import { useState } from "react";
import { Dialog, Button } from '@mui/material';
import { DialogLink } from "./DialogStyle";
import Link from 'next/link'

const AddCartDialog = ({ showDialog }) => {
    const [open, setOpen] = useState(showDialog);

    const handleClose = () => {
        setOpen(false)
    }

    return (
            <Dialog onClose={handleClose} open={open}>
                <DialogLink variant="outlined"><Link href='/cart'>Go To Cart</Link></DialogLink>
                <DialogLink variant="contained"><Link href='/'>Continue Shopping</Link></DialogLink>
            </Dialog>
    )
}

export default AddCartDialog;