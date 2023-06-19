import List from "./List/index";
import Form from "./Form/index";
import { useState, useEffect } from "react";
import { render } from "react-dom";
function Todos() {
    const [todoList, setTodoList] = useState([]);
    useEffect(() => { localStorage.setItem("item", JSON.stringify(todoList)) }, [todoList]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('item'));
        console.log(items);
        if (!(items.lenght === 0 || items.lenght === 1)) {
            setTodoList(items);
        } else {
            console.log("çalıtı");
            setTodoList([{
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
            }])
        };

    }, []);

    return (
        <section mv-app="todoapp" className
            ="todoapp" mv-bar="none" mv-storage="local" mv-autosave="3" mv-mode="edit" mv-init="#data" typeof="Item" mv-permissions="read save edit add delete">
            <div className="mv-bar mv-ui"></div>
            <Form todoList={todoList} setTodoList={setTodoList} />
            <List todoList={todoList} setTodoList={setTodoList} />
        </section>)
}
export default Todos;