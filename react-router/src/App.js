import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Contact from './pages/Contact';
import Home from './pages/Home';
import Users from './pages/Users';
import Menu from './compoments/Menu';
import UserDetail from './pages/UserDetail';
// !! React  Router kullandığımızda öteki sayfalara geçerken sayfa yenilenmeden geçiyor eğer link kullanırsak sayfa yenılenır.
function App() {
  return (
  <BrowserRouter>
  <Menu/>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path="users" element={<Users />}/>
        <Route path="users/:id" element={<UserDetail />}/>
        <Route path="contact" element={<Contact />}/>
    </Routes>                            
  </BrowserRouter>);
};

export default App;
