import Counter from "./compoments/Counter";
import { useState } from "react";

function App() {
  const [isVisible,setİsVisible]= useState(true)
  return (<div>
      {isVisible && <Counter/>}
      <button onClick={()=>setİsVisible(!isVisible)}>Remove</button>
  </div>);
}

export default App;
