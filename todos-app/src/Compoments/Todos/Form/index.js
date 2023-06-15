import {useState} from "react";
function Form({setTodoList,todoList}) {
    const [inputText,setInputText]= useState({text:"",line: false});
    console.log(inputText);
    const changeInputText=(e)=>{
        setInputText({text:e.target.value,line:false})
    }
    const addTodo=(e)=>{
        e.preventDefault();
        if (!inputText.text =="") {
            setTodoList(...todoList,inputText);
        }

    }
    return (<div>
        <form onSubmit={addTodo}>
        <input onChange={changeInputText} placeholder="What needs to be done?"/>
        </form>
    </div>)
}
export default Form;