import React, { useState } from 'react'
import UserRow from '../../Components/UserRow'
function ManageUsers() {

  // const [userInfo,setUserInfo] = useState({firstName:"", lastName:"", email:"", phone:"", password:"", address:""})
  const [userInfo, setUserInfo] = useState(userArray)

  const deleteUser=(custId)=>{
    setUserInfo(userInfo.filter((user)=> user.custId != custId ))
  }

  return (
    <div className='container text-center'>
      <div className='shadow-lg'>
        <table className="table table-bordered table-hover table-lg table-responsive my-3 shadow-lg">
          <thead>
            <tr className='table-dark'>
              <th>Customer ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className=''>
            {
              userInfo.map((user) => <UserRow key={user.custId} user={user} deleteUser={deleteUser}/>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageUsers



const userArray = [
  {
    custId: 101,
    firstName: "Amit",
    lastName: "Sharma",
    email: "amit.sharma@example.com",
    phone: "9876543210",
    password: "Amit@123",
    address: "21 MG Road, Pune, Maharashtra"
  },
  {
    custId: 102,
    firstName: "Priya",
    lastName: "Verma",
    email: "priya.verma@example.com",
    phone: "9123456789",
    password: "Priya#456",
    address: "45 Green Street, Delhi"
  },
  {
    custId: 103,
    firstName: "Rahul",
    lastName: "Kumar",
    email: "rahul.kumar@example.com",
    phone: "9988776655",
    password: "Rahul$789",
    address: "B-32 Sector 15, Noida, UP"
  },
  {
    custId: 104,
    firstName: "Sneha",
    lastName: "Patil",
    email: "sneha.patil@example.com",
    phone: "9001122334",
    password: "Sneha@321",
    address: "Sunshine Apartments, Thane, Mumbai"
  },
  {
    custId: 105,
    firstName: "Arjun",
    lastName: "Reddy",
    email: "arjun.reddy@example.com",
    phone: "9090909090",
    password: "Arjun!123",
    address: "Lakeview Colony, Hyderabad"
  }
];
