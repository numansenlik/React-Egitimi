import './App.css';
import UserList from './compomants/UserList';
import React,{useEffect,useState} from 'react';
import Post from './compomants/Post';

function App() {
  const [userid,setUserId] = useState(null);
  return (
    <div className="App">
      <div><UserList setUserId={setUserId} /></div>
      <div><Post userid={userid}></Post></div>
    </div>
  );
}

export default App;
