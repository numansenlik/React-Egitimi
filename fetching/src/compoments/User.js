import {useEffect, useState} from 'react'
// axios kullndığımızzda erhangi br isteği iptal edebiliriz veyahut timeout belirleyebilriz.
// axios daha geniş bir browser desteği var
import axios, { Axios } from 'axios';

function User() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{setUsers(res.data)})
    .catch((e)=>console.log(e))
    .finally(()=>setIsLoading(false))
    },[])
  return (
    <div>
        <h1>User</h1>
        {isLoading && <div>Loading...</div>}
        {users.map((user)=>{ return <div key={user.id}>{user.name}</div>})}
        
    </div>
  )
}

export default User