import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    IconButton,
    Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const ConfirmDialog = ({ question, showDialog, confirmAction }) => {
    const [open, setOpen] = useState(showDialog);

    const handleClose = () => {
        setOpen(false)
    }

    const handleAction = (isConfirm) => {
        if (isConfirm) {
            confirmAction(isConfirm);
            handleClose();
        } else {
            setOpen(false)
            confirmAction(isConfirm)
        }

    }

    return (
        <Dialog onClose={handleClose} open={open} maxWidth="sm" fullWidth>
            <DialogTitle>Confirm the action</DialogTitle>
            <Box position="absolute" top={0} right={0}>
                <IconButton>
                    <CloseIcon onClick={() => handleAction(false)} />
                </IconButton>
            </Box>
            <DialogContent>
                <Typography>{question}</Typography>
            </DialogContent>
            <DialogActions>
                <Button color="primary" variant="contained" onClick={() => handleAction(false)}>
                    Cancel
                </Button>
                <Button color="secondary" variant="contained" onClick={() => handleAction(true)}>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;