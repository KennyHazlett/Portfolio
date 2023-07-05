import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import './FeedbackModal.scss';

const FeedbackModal = () => {
    const [open, setOpen] = useState(false);


    const handleYes = async () => {
        setOpen(true);
    };

    const handleNo = async () => {
        window.location.href = 'https://www.youtube.com/watch?v=BBJa32lCaaY';
    };

    const handleClose = () => {
        window.location.href = 'https://www.youtube.com/watch?v=BBJa32lCaaY';
    };


    return (
        <section id="feedback-modal-section" className='contact-section-container'>
            <div className="contact-container">
                <div className="feedback-modal">
                    <div className="question-container">
                        <h1 className="feedback-modal-title">Did you like my website?</h1>
                    </div>
                    <div className="button-container">
                        <Button className="feedback-button" variant="outlined" color="primary" onClick={handleYes}>
                            Yes
                        </Button>
                        <Button className="feedback-button" variant="outlined" color="primary" onClick={handleNo}>
                            No
                        </Button>
                    </div>
                </div>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle className="dialog-title">
                    <Typography>
                        Click NO Anyways Please
                    </Typography>
                </DialogTitle>
                <DialogActions className="dialog-actions">
                    <Button
                        alignProperty="center"
                        className="dialog-button"
                        onClick={handleClose}
                        color="primary"
                    >
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        </section>
    );
};

export default FeedbackModal;
