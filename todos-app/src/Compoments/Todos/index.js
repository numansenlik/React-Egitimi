import List from "./List/index";
import Form from "./Form/index";
import { useState } from "react";
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


    return (
        <section mv-app="todoapp" class="todoapp" mv-bar="none" mv-storage="local" mv-autosave="3" mv-mode="edit" mv-init="#data" typeof="Item" mv-permissions="read save edit add delete">
            <div class="mv-bar mv-ui"></div>
            <Form todoList={todoList} setTodoList={setTodoList} />
            <List todoList={todoList} setTodoList={setTodoList} />
        </section>)
}
export default Todos;