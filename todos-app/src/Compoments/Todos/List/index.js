import React from 'react';
import './index.css';
function List({ setTodoList, todoList }) {

    const updateTodoList = index => e => {
        // Burada değişirilen todo listi yeniden tanımlayarak güncelliyoruz.
        // İndexsi çekmemiz gerekiyor ondan funsiyona indexi yolluyoruz.Ardındanda attiributu çekmek için e yide alıyoruz.
        // !ileride localide güncellemek gerekiyor b fonsiyonun içinde.
        let newArr = [...todoList];
        newArr[index].text = e.target.value;
        setTodoList(newArr);
    }
    const checkBoxing = (e) => {
        if (e.target.checked === true) {
            e.target.parentElement.parentElement.className = "completed";
        } else {
            e.target.parentElement.parentElement.className = "";
        }

    }
    /*<section class="main">

        <input property="toggleAll" id="toggle-all" class="toggle-all" type="checkbox" mv-mode="read" datatype="boolean" aria-live="polite">
        <label for="toggle-all" mv-action="set(done, !toggleAll)">
            Mark all as complete
        </label>

        <ul class="todo-list">
            <li mv-multiple="todo" class="" property="todo" typeof="Item" mv-mode="edit">
                <div class="view">
                    <input property="done" class="toggle" type="checkbox" mv-mode="edit" datatype="boolean" aria-label="Done">
                    <label property="text" mv-mode="edit" aria-label="Text"><input placeholder="(Text)" value="Taste JavaScript" class="mv-editor" style="width: 0px;"></label>
                    <button class="destroy" mv-action="delete(todo)"></button>
                </div>
    */
    return (
        <section className='main'>
            <input property="toggleAll" id="toggle-all" class="toggle-all" type="checkbox" mv-mode="read" datatype="boolean" aria-live="polite" />
            <label for="toggle-all" mv-action="set(done, !toggleAll)">
                Mark all as complete
            </label>
            <ul className="todo-list">
                {todoList.map((item, index) =>
                    <li key={index} mv-multiple="todo" class="" property="todo" typeof="Item" mv-mode="edit" >
                        <div className="view">
                            <input property="done" class="toggle" type="checkbox" mv-mode="edit" datatype="boolean" aria-label="Done" onClick={checkBoxing} />
                            <label property="text" mv-mode="edit" aria-label="Text">
                                <input class="mv-editor" style={{width: "0px"}} placeholder="(Text)" value={item.text} onChange={updateTodoList(index)}  />
                            </label>
                            <button class="destroy" mv-action="delete(todo)" ></button>
                        </div>
                    </li>)}
            </ul>
        </section>)
}
export default List;