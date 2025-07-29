import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

import '../../css/SpareParts.css'
function SpareParts() {

  const [parts, setParts] = useState(partsArray)

  const [newPart, setNewPart] = useState({ newPartsArray })

  const handleAddPart = () => {
    if (!newPart.name || !newPart.quantity || !newPart.price) return;

    const id = parts.length + 1;
    //axios post
    setParts([...parts, { ...newPart, id: id, quantity: newPart.quantity, price: newPart.price }]);
    setNewPart({ name: '', quantity: 0, price: 0 });
  };

  const handlePlus = (id) => { }
  const handleMinus = () => { }
  const handleDelete = (id) => {
    //axios delete
    setParts(parts.filter(p => p.id !== id));
  };

  return (
    <div className='container my-3'>
      <div className="add-part-form">
        <input
          type="text"
          placeholder="Part Name"
          value={newPart.name}
          onChange={(e) => setNewPart({ ...newPart, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newPart.quantity}
          onChange={(e) => setNewPart({ ...newPart, quantity: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newPart.price}
          onChange={(e) => setNewPart({ ...newPart, price: e.target.value })}
        />
        <button onClick={handleAddPart}>Add Part</button>
      </div>
      <table className="table table-bordered text-center shadow-lg">
        <thead className='table-dark'>
          <tr>
            <th>ID</th>
            <th>Part Name</th>
            <th>Quantity</th>
            <th>Price (&#8377;)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {parts.map((part) => (
            <tr key={part.id} style={{ backgroundColor: part.quantity <= 10 ? 'red' : '' }}>
              <td>{part.id}</td>
              <td>{part.name}</td>
              <td>{part.quantity}</td>
              <td>{part.price}</td>
              <td >
                <FaPlus className='mx-2' onClick={() => handlePlus(part.id)} />
                <FaMinus className='mx-2' onClick={() => handleQuantityChange(part.id, -1)} />
                <MdDelete className='mx-2' onClick={() => handleDelete(part.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SpareParts







const partsArray = [
  { id: 1, name: 'Oil Filter', quantity: 10, price: 250 },
  { id: 2, name: 'Brake Pads', quantity: 5, price: 600 },
  { id: 3, name: 'Engine Belt', quantity: 2, price: 900 },
]


const newPartsArray = [
  { id: 1, name: 'Oil Filter', quantity: 10, price: 250 },
  { id: 2, name: 'Brake Pads', quantity: 5, price: 600 },
  { id: 3, name: 'Engine Belt', quantity: 2, price: 900 },
]