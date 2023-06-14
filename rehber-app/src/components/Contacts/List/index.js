import React from "react";
import { useState } from "react";
function List({directory}){
    const [filterText,setFilterText] = useState("");
    const filtered = directory.filter((item)=>{
    return Object.keys(item).some((key)=>{
        return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase());
    });
    });
    console.log(filtered);
return(<React.Fragment><div>
    <input placeholder="You Can use filter" onChange={(e)=>setFilterText(e.target.value)}/>
    <ul className="list">
        {
        filtered.map((item,index)=><li key={index}>{item.name}{item.number}</li>)
        }
    </ul>
    <p>Total Contacts{filtered.length}</p>
    </div></React.Fragment>)
}
export default List;