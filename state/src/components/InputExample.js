import React, { useState } from "react";
function InputExample() {
    const [form,setForm]= useState({name:"",surname:""})
    function changeInput(e) {
        setForm({...form,[e.target.name] :e.target.value})
    }
    return(<div>
        <input name="name" onChange={changeInput} value={form.name}/>
        <br/>
        <br/>
        <input name="surname" onChange={changeInput} value={form.surname}/>
        <br/>
        <h4>{form.name} {form.surname}</h4>
        </div>)
}
export default InputExample;