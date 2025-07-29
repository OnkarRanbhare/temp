import React from 'react'

import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function AddNewServiceModal({ open, setOpen, handleClose }) {
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">Create new service</Typography>
                    <form className="" >
                        <input className='form-control mt-1' type="text" placeholder='Name' />
                        <textarea className='form-control mt-1' placeholder='e.g Oil Change + Brake replacement'></textarea>
                        <input className='form-control mt-1' type="number" placeholder='&#8377; 200' />
                        <input className='form-control mt-1' type="file" />
                        <input className='btn btn-success mt-1' type="submit" value="Add" />
                    </form>
                </Box>
            </Modal>
        </>
    )
}

export default AddNewServiceModal




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    p: 4,
};