import React from "react";
function User(props){
return(<div>{props.isLoggedIn ? `${props.name} ${props.surname}`:"Giris Yapamadınız"}</div>)
}

export default User;