import Booking from '../../Components/Booking'

import { useEffect, useState } from 'react';



function MyBookings() {
    const [myBookings, setMyBookings] = useState([]);

    useEffect(()=>{
      setMyBookings(bookingsArray)
      
    },[])
  return (
    <div className='container d-flex flex-wrap'>
      {myBookings.map((booking) =>
        <Booking booking={booking} key={booking.bookingId} />
      )}
    </div>
  )
}

export default MyBookings










const bookingsArray = [
  {
    bookingId: 101, bookingDate: "2025-07-22", status: "Completed", paymentStatus: "Unpaid", 
    carId : 11, carName : "Honda City - MH12AB1234",
    services: [
      { id: 1, name: "Oil Change" },
      { id: 2, name: "Wheel Alignment" }
    ]
  },
  {
    bookingId: 102, bookingDate: "2025-07-24",status: "Confirmed",paymentStatus: "Unpaid", 
    carId : 22, carName : "Maruti Swift - MH14CD5678",
    services: [
      { id: 3, name: "Brake Inspection" },
      { id: 4, name: "AC Service" }
    ]
  },
  {
    bookingId: 103,bookingDate: "2025-08-01",status: "Cancelled",paymentStatus: "Unpaid", 
    carId : 33, carName :"Hyundai Creta - MH13EF9101",
    services: [
      { id: 5, name: "Battery Check" }
    ]
  },
  {
    bookingId: 104,bookingDate: "2025-08-10",status: "Completed",paymentStatus: "Unpaid", 
    carId : 44, carName :"Tata Nexon - MH12GH4321",
    services: [
      { id: 6, name: "Car Wash" },
      { id: 7, name: "Tyre Replacement" }
    ]
  },
  {
    bookingId: 105,bookingDate: "2025-08-15",status: "Confirmed",paymentStatus: "Unpaid",
    carId : 55, carName :"Kia Seltos - MH12JK7854",
    services: [
      { id: 8, name: "General Service" },
      { id: 9, name: "Interior Cleaning" },
      { id: 10, name: "Engine Diagnostics" }
    ]
  }
]