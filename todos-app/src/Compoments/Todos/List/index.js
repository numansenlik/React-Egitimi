import { render } from '@testing-library/react';
import React from 'react';
function List({ setTodoList, todoList }) {

    const updateTodoList = index => e => {
        // Burada değişirilen todo listi yeniden tanımlayarak güncelliyoruz.
        // İndexsi çekmemiz gerekiyor ondan funsiyona indexi yolluyoruz.Ardındanda attiributu çekmek için e yide alıyoruz.
        // !ileride localide güncellemek gerekiyor b fonsiyonun içinde.
        let newArr = [...todoList];
        newArr[index].text = e.target.value;
        setTodoList(newArr);
    }
    const checkBoxing = (item) => (e) => {
        // Burada checkboxa tıklandığında itemın line değerini true veya fals yapıyor
        if (e.target.checked === true) {
            e.target.parentElement.parentElement.className = "completed";
            item.line = true;
        } else {
            e.target.parentElement.parentElement.className = "";
            item.line = false;
        }
    }

    const deleteTodo = index => e => {
        let newArray = [...todoList];
        newArray.splice(index,1);
        setTodoList([...newArray]);
    }
    const allTodos= (e) =>{
        let newArray = [...todoList];
        let newArr=[];
        newArray.map((item)=>(newArr.push(item.line)));
        console.log(todoList,"First");
        if (newArr.includes(false)) {
            newArray.map((item,index)=>(
                newArray[index]={text:item.text,line:true}));
            setTodoList(newArray);
            console.log(todoList);
        } else {
            newArray.map((item,index)=>(newArray[index]={text:item.text , line:false}));
            setTodoList(newArray);
            console.log(todoList);
        };
            }
    return (
        <section className='main'>
            <input property="toggleAll" id="toggle-all" className="toggle-all" type="checkbox" mv-mode="read" datatype="boolean" aria-live="polite" />
            <label htmlFor="toggle-all" mv-action="set(line, !toggleAll)" onClick={allTodos}>
                Mark all as complete
            </label>
            <ul className="todo-list">
                {todoList.map((item, index) =>
                    <li key={index} mv-multiple="todo" className={item.line === true ? "completed" : ""} property="todo" typeof="Item" mv-mode="edit" >
                        <div className="view">
                            {/* Alttaki imput checkbox imputudur  tıklandığında değişme fonksiyonu checBoxing fonsyonu çalışıyor checked'a item line nın değerine göre başlangıc atması yapıyor. */}
                            <input property="done" className="toggle" type="checkbox" mv-mode="edit" datatype="boolean" aria-label="Done" onClick={checkBoxing(item)} defaultChecked={item.line} />
                            <label property="text" mv-mode="edit" aria-label="Text">
                                <input className="mv-editor" style={{ width: "0px" }} placeholder="(Text)" value={item.text} onChange={updateTodoList(index)} />
                            </label>
                            <button className="destroy" mv-action="delete(todo)" onClick={deleteTodo(index)}></button>
                        </div>
                    </li>)}
            </ul>
        </section>)
}
export default List;