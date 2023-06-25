import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

function UserDetail() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    // ! Localation ile iile user .js deki statete tanımlanan veriyi çekiyoruz
    const { state: location } = useLocation();
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(({ data }) => { setUser(data) })
            .catch((err) => setUser())
    }, [id])
    return (
        <div>
            <h2>Kullanıcı Detayı</h2>
            {
                location ? <pre>{JSON.stringify(location, null, 2)}</pre> : <pre>{JSON.stringify(user, null, 2)}</pre>
            }
            {/* {!location && <pre>{JSON.stringify(user, null, 2)}</pre>} */}
            <Link to={`/users/${Number(id) + 1} `}>Sonraki Kullanıcı</Link>
        </div>
    )
}

export default UserDetail