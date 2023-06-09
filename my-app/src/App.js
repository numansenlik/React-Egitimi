import "./App.css";
import React from'react';
import Header from './components/Header';
import User from './components/user'
const name ="Numan";
const surname="Şenlik";
const isLoggedIn = true;
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

// ! ----------------------- Props kullanımı---------------
// ! Props Farklı bi companenteki fonsıyona bilgi gönderiken çevtimiz kompanente etiket bilgilerini yollaya biliriz
return(
  <React.Fragment>
    <User name="Mehmet" 
    surname = "Topuz  "
    isLoggedIn ={true}
    />



  </React.Fragment>
  )
}
export default App;