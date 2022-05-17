import { useState } from "react";
import { Dialog, Button } from '@mui/material';
import { DialogLink } from "./DialogStyle";
import Link from 'next/link'

const AddCartDialog = ({ showDialog }) => {
    const [open, setOpen] = useState({showDialog});

    const handleClose = () => {
        setOpen(false)
    }

    return (
            <Dialog onClose={handleClose} open={open}>
                <Link href='/cart'><DialogLink variant="outlined">Go To Cart</DialogLink></Link>
                <Link href='/'><DialogLink variant="contained">Continue Shopping</DialogLink></Link>
            </Dialog>
    )
}

export default AddCartDialog;