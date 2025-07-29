import React from 'react'
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


function CarDetailsModal({ open, setOpen, handleClose }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">Add Car Details</Typography>
                <form className="" >
                    Model
                    <input className='form-control mt-1' type="text" placeholder='Model' />
                    Number
                    <input className='form-control mt-1' type="text" placeholder='e.g- MH09AD5432' />
                    <input className='btn btn-success mt-2' type="submit" value="Confirm Booking" />
                </form>
            </Box>
        </Modal>
    )
}

export default CarDetailsModal



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