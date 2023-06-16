import { useState } from "react";
function Form({ setTodoList, todoList }) {
    const [inputText, setInputText] = useState({ text: "", line: false });
    const changeInputText = (e) => {
        setInputText({ text: e.target.value, line: false });
    }
    const addTodo = (e) => {
        e.preventDefault();
        if (!(inputText.text === "")) {
            setTodoList([...todoList, inputText]);
            e.target.firstChild.value = "";
        }

    }
    return (
        <header className="header">
            <h1>Todos</h1>
            <form onSubmit={addTodo}>
                <input property="newTodo" class="new-todo" placeholder="What needs to be done?" autofocus="" mv-mode="edit" aria-label="New todo" onChange={changeInputText} />
            </form>
        </header>
    )
}
export default Form;