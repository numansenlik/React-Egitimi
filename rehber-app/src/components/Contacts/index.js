import{useState} from "react";
import React from "react";
import List from './List/index';
import Form from "./Form/index";
import "./styles.css";
function Contacts() {
    const [directory, setDirectory] = useState([{name:"Numan",number:"2115415"},{name:"Mehmet",number:"2115166"},{name:"Süleyman",number:123123}]);
    return (<div id="container">
        <h1>Contacts</h1>
        <List directory={directory}/>
        <Form directory={directory} setDirectory={setDirectory} />
    </div>)
}

export default Contacts;