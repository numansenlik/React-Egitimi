import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
//! navigate ile onclict eventi atayabiliryoruz navigate -1 değeri atarsak Bir sayfaya gidildiinde  geri gelmek istediğimizdede kullanabiliriz

function Menu() {
  const navigate = useNavigate();
  return (
    <div>
        <ul className='menu'>
            <li><a href='#/' onClick={()=>navigate(-1)}>Geri</a></li>
            <li><Link to="/">AnaSayfa</Link></li>
            <li><Link to="users">Kullanıcılar</Link></li>
            <li><Link to="contact">İletişim</Link></li>
            
        </ul>
    </div>
  )
}

export default Menu