import React,{useState,useEffect} from 'react';
import axios from "axios";
function Post({userid}) {
    const [poster,setPoster]= useState();
    useEffect(()=>{
    axios(`https://jsonplaceholder.typicode.com/users/${userid}`)
    .then((res)=>setPoster(res.data))
    },[userid])
    console.log(poster);
  return (
    <div>
        <h2>Post</h2>
        <pre>{JSON.stringify(poster,null,2)}</pre>
    </div>
  )
}

export default Post