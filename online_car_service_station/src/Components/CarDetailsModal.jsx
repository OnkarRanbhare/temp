import React, { useState } from 'react'
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


function CarDetailsModal({ open, setOpen, handleClose, selectedServices,setSelectedServices }) {
    const [car,setCar] = useState({model : "", regNo : ""})
    const [bookingDate, setBookingDate] = useState('')
    const handleConfirm =(e)=>{
            e.preventDefault()

            //axios post
            console.log(car)
            console.log(bookingDate)
            console.log(selectedServices)
            setOpen(false)
            setSelectedServices([])            
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">Add Car Details</Typography>
                <form onSubmit={handleConfirm} >
                    <label>Model</label>
                    <input className='form-control mb-1' type="text" onChange={(e)=>{setCar({...car, model : e.target.value})}} placeholder='Model' />
                    <label>Reg. Number</label>
                    <input className='form-control ' type="text" onChange={(e)=>{setCar({...car, regNo : e.target.value})}} placeholder='e.g- MH09AD5432' />
                    <label>Select the date to service the car.</label>
                    <input className='form-control mb-2' type="date" onChange={(e)=>{setBookingDate(e.target.value)}} min={new Date().toISOString().split('T')[0]}/>
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