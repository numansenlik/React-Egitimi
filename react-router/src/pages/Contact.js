import React, {useState, useEffect} from 'react'
import axios from 'axios';
function Contact() {
  const [users,setUsers] = useState([]);
useEffect(()=>{
axios("https://jsonplaceholder.typicode.com/users")
.then((data)=>{setUsers(data.data)})
},[])
  return (
<div>İletişim</div>
  )
}

export default Contact