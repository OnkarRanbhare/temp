import React, { useEffect, useState } from 'react'
import OilIcon from '../../assets/icons/OilIcon.png'
import BrakeRepairIcon from '../../assets/icons/BrakeRepairIcon.png'
import CarWashIcon from '../../assets/icons/CarWashIcon.png'
import BatteryIcon from '../../assets/icons/BatteryIcon.png'
import ACIcon from '../../assets/icons/ACIcon.png'

import Service from '../../Components/Service';
import CarDetailsModal from '../../Components/CarDetailsModal'

function ViewServices() {

  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    if(selectedServices.length > 0)
    setOpen(true)
  }
  const handleClose = () => setOpen(false)


  const [services, setServices] = useState([])
  const [selectedServices, setSelectedServices] = useState([])

  const handleToggleService = (serviceId) => {
    const alreadyAdded = selectedServices.some(s => s === serviceId)
    if (alreadyAdded) {
      setSelectedServices(prev => prev.filter(s => s !== serviceId))
    } else {
      setSelectedServices(prev => [...prev, serviceId])
    }
  };

  const isServiceSelected = (id) => {
    return selectedServices.some(s => s === id)
  };


  useEffect(() => {
    setServices(servicesArray)
  }, [])


  return (
    <div className='container view-services'>
      <button className='btn btn-primary mx-5 my-2' onClick={handleOpen} >Book</button>
      {services.map(service => (
        <Service
          key={service.serviceId}
          service={service}
          isSelected={isServiceSelected(service.serviceId)}
          onToggle={() => handleToggleService(service.serviceId)}
        />
      ))}
      <CarDetailsModal open={open} setOpen={setOpen} selectedServices={selectedServices} setSelectedServices={setSelectedServices} handleClose={handleClose} />
      
    </div>

  )
}

export default ViewServices



const servicesArray = [
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
]