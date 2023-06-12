import {useState} from "react";
function Counter(){
const [value,setValue]= useState(0);

function valueDowner() {
    setValue(value-1)
    return value;
}
return(<div>
    <h1>{value}</h1>
    <button onClick={()=>setValue(value+1)}>UpCount</button>
    <button onClick={valueDowner}>DownCount</button>
</div>)
}
export default Counter;