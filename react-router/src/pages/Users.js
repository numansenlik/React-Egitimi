import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
function Users() {
  const [users,setUsers] = useState([]);
useEffect(()=>{
axios("https://jsonplaceholder.typicode.com/users")
.then((data)=>{setUsers(data.data)})
},[])
  return (
    <div>
    <h2>Kulanıcılar</h2>
    <ul>
    {users.map((user)=><li key={user.id}>
      <Link to={`${user.id}`}>{user.name}</Link>
    </li>)}
    </ul>
    </div>
  )
}

export default Users