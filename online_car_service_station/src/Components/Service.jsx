import '../css/Service.css'
import { FaPlus } from 'react-icons/fa'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { SiTicktick } from "react-icons/si";

import { getRole } from '../Utils/jwtUtil'

function Service({ service, isSelected, onToggle }) {

  const handlePlus = () => {

  }
  const handleTick = () => {

  }
  const handleEdit = () => {

  }
  const handleDelete = () => {

  }

  return (
    <div className='row m-4 p-2 border rounded single-service' style={{ backgroundColor: "white" }}>
      <div className='col-2'><img style={{ height: '50px' }} src={service.icon} alt="service-icon" /></div>
      <div className='col-5'>
        <span className='serviceName'>{service.name}</span>
        <p>{service.description}</p>
      </div>
      <div className='col-2'>&#x20B9;{service.price}</div>
      {/* <div className='col-2 plus text-end' onClick={handleClick}> */}
      <div className='col-3 plus text-end'>
        {
          getRole() === 'customer' ?
            <>
              {isSelected ?
                <SiTicktick size={'35px'} color='#00ff2aff' onClick={onToggle} />
                :
                <FaPlus color='#1b892dff' size={'35px'} onClick={onToggle} />
              }
            </>
            :
            <>
              <MdEdit size={'35px'} color='blue' onClick={handleEdit} />
              <MdDelete size={'35px'} color='red' onClick={handleDelete} />
            </>
        }
      </div>
    </div>
  )
}

export default Service
