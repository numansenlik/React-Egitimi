import "./App.css";
import React from'react';
import Header from './components/Header';
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
return (<React.Fragment><h1>{isLoggedIn ? `Benim Adım ${name} Soyadım ${surname}`:`Giriş Yapmadınız`}</h1>
{/* <label htmlFor="input">Numan</label> */}
{/* <input id="input"/> */}
</React.Fragment>)
}
export default App;