import React from "react";
function User({name,surname,isLoggedIn,age,friends}){
return(<React.Fragment>
    {isLoggedIn ? `${name} ${surname}`:"Giris Yapamadınız"}
    {friends.map((item,index)=>(<div key={index}>{index+1} {item}</div>))}
    </React.Fragment>)
}

export default User;