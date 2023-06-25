import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function UserDetail() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(({data}) => { setUser(data) })
            .catch((err)=>setUser())
    }, [id])
    return (
        <div>
            <h2>Kullanıcı Detayı</h2>
            {
                user && <pre>{JSON.stringify(user, null, 2)}</pre>
            }
            <Link to={`/users/${Number(id) + 1} `}>Sonraki Kullanıcı</Link>
        </div>
    )
}

export default UserDetail