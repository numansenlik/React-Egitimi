import React, {useState, useEffect} from 'react'
import axios from 'axios';
function Contact() {
  const [users,setUsers] = useState([]);
useEffect(()=>{
axios("https://jsonplaceholder.typicode.com/users")
.then((data)=>{setUsers(data)})
},[])
  return (
    <div>
    <h2>Kulanıcılar</h2>
    {users.map((user)=>{return<li key={user.id}>{user.name}</li>})}
    </div>
  )
}

export default Contact