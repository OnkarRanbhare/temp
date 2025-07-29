import React, { useEffect } from 'react'
import Service from '../../Components/Service';
import { useState } from 'react';
import AddNewServiceModal from '../../Components/AddNewServiceModal';
import OilIcon from '../../assets/icons/OilIcon.png'
import BrakeRepairIcon from '../../assets/icons/BrakeRepairIcon.png'
import CarWashIcon from '../../assets/icons/CarWashIcon.png'
import BatteryIcon from '../../assets/icons/BatteryIcon.png'
import ACIcon from '../../assets/icons/ACIcon.png'

function ManageServices() {

  const [allServices, setAllServices] = useState([]);

  const handleAdd = ()=>{

  }


  const [open, setOpen] =useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useEffect(()=>{
    // axios get
    setAllServices([
    { serviceId: 1, name: 'Oil Change', price: 500, description: 'Engine oil + filter replacement', icon: OilIcon },
    { serviceId: 2, name: 'Brake Repair', price: 1500, description: 'Brake pad check and cleaning', icon: BrakeRepairIcon },
    { serviceId: 3, name: 'Car Wash', price: 1500, description: 'Exterior and interior cleaning', icon: CarWashIcon },
    { serviceId: 4, name: 'Battery Replacement', price: 1500, description: 'Replace car battery', icon: BatteryIcon },
    { serviceId: 5, name: 'AC Service', price: 1500, description: 'Gas refill + general AC maintenance', icon: ACIcon },
    { serviceId: 6, name: 'Oil Change', price: 500, description: 'Engine oil + filter replacement', icon: OilIcon },
    { serviceId: 7, name: 'Brake Repair', price: 1500, description: 'Brake pad check and cleaning', icon: BrakeRepairIcon },
    { serviceId: 8, name: 'Car Wash', price: 1500, description: 'Exterior and interior cleaning', icon: CarWashIcon },
    { serviceId: 9, name: 'Battery Replacement', price: 1500, description: 'Replace car battery', icon: BatteryIcon },
    { serviceId: 10, name: 'AC Service', price: 1500, description: 'Gas refill + general AC maintenance', icon: ACIcon },
  ])

  },[])



  return (
    <div className='container'>
      <button className='btn btn-primary mx-5 mt-3' onClick={handleOpen}>Add New</button>
      <div>
        {
          allServices.map((service) =>
            <Service key={service.serviceId} service={service} />
          )
        }
      </div> 
      <AddNewServiceModal open={open} setOpen={setOpen} handleClose={handleClose}/>    
    </div>
    
  )
}

export default ManageServices
