import { MdDelete } from 'react-icons/md'
MdDelete
function UserRow({user, deleteUser}) {
    return (
        <tr key={user.custId}>
            <td>{user.custId}</td>
            <td>{user.firstName + " " + user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address}</td>
            <td><MdDelete color='red' className='cursor-pointer' onClick={() => deleteUser(user.custId)} /></td>
        </tr>
    )
}

export default UserRow
