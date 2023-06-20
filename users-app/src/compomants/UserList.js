import React,{useState,useEffect} from 'react'
import axios from 'axios';

function UserList({setUserId}) {
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);
useEffect(()=>{
axios("https://jsonplaceholder.typicode.com/users")
.then(({data})=>{setUsers(data)})
.finally(()=>{setLoading(false)})
},[])
  return (
    <div>
        <h2>Kullanıcılar</h2>
        {loading && <h1>Yükleniyor</h1>}
        {!loading && <ul className='user-list'>
        {users.map((item,i)=>{return<li onClick={(e)=>setUserId(item.id)} key={i}>{item.name}</li>})}
        </ul> }
    </div>
  )
}

export default UserList