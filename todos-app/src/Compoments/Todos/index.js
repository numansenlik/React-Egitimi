import List from "./List/index";
import Form from "./Form/index";
import { useState } from "react";
function Todos() {
    const [todoList,setTodoList] = useState([{ text: "Eve Gitmek", line: false }, { text: "Bakkala Gitmek" }]);
    return (<div>
        Todos
        <Form todoList={todoList} setTodoList={setTodoList}/>
        <List todoList={todoList} setTodoList={setTodoList}/>
    </div>)
}
export default Todos;