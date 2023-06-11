import React from "react";
import User from './components/User';
const name ="Numan";
const surname="Şenlik";
const isLoggedIn = true;
const friends= [{id:1, name: "Mehmet"},{id:2, name:"Süleyman"},{name: "Ahmet" ,id:3},{name:"Cahit",id:4}];
function App (){
  // return React.createElement('div',null,'Hello')
// return(<div>
  {/* <Header/> */}
  {/* <Header/> */}
  {/* <Header/> */}
{/* </div>) */}
// return (<div><h1>{`Benim Adım ${name} Soyadım ${surname}`}</h1></div>)
// return (<React.Fragment><h1>{!(User()=="") ? `Benim Adım ${name} Soyadım ${surname}`:`Giriş Yapmadınız`}</h1>
{/* <label htmlFor="input">Numan</label> */}
{/* <input id="input"/> */}
// </React.Fragment>)

return(<React.Fragment>
  <h3>Kullanıcı İslemleri</h3>
  <User 
  name = {name} 
  surname ={surname} 
  isLoggedIn={isLoggedIn}  
  age={26}
  friends={friends}
  adress= {{title:"Osmangazi/BURSA",zip:190911}}
  />
  </React.Fragment>);

}
// ! ----------------------- Props kullanımı---------------
// ! Props Farklı bi companenteki fonsıyona bilgi gönderiken çevtimiz kompanente etiket bilgilerini yollaya biliriz

export default App;