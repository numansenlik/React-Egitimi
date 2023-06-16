import List from "./List/index";
import Form from "./Form/index";
import { useState,useEffect } from "react";
import { render } from "react-dom";
function Todos() {
    const [todoList, setTodoList] = useState([
        {
            line: true,
            text: "Taste JavaScript"
        },
        {
            text: "Code furiously",
            line: true
        },
        {
            text: "Promote Mavo",
            line: false
        },
        {
            text: "Give talks",
            line: false
        },
        {
            text: "Write tutorials",
            line: true
        },
        {
            text: "Have a life!",
            line: false
        }
    ]
    );
useEffect(()=>{
todoList.map((item,index)=>localStorage.setItem(index,{text:item.text,line:item.line}))
},[todoList])

    return (
        <section mv-app="todoapp" className
        ="todoapp" mv-bar="none" mv-storage="local" mv-autosave="3" mv-mode="edit" mv-init="#data" typeof="Item" mv-permissions="read save edit add delete">
            <div className="mv-bar mv-ui"></div>
            <Form todoList={todoList} setTodoList={setTodoList} />
            <List todoList={todoList} setTodoList={setTodoList} />
        </section>)
}
export default Todos;