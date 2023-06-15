import { useEffect, useState } from 'react';
import React from 'react';
function List({setTodoList,todoList}) {
  
    const updateTodoList = index => e => {
        // Burada değişirilen todo listi yeniden tanımlayarak güncelliyoruz.
        // İndexsi çekmemiz gerekiyor ondan funsiyona indexi yolluyoruz.Ardındanda attiributu çekmek için e yide alıyoruz.
        // !ileride localide güncellemek gerekiyor b fonsiyonun içinde.
        let newArr = [...todoList]; 
        newArr[index].text = e.target.value;
        setTodoList(newArr);
        console.log(todoList);
    }
    return (
        <>
            <ul>
                {todoList.map((item, index) => <li key={index}>
                    <div>
                        <input property="done" type="checkbox" datatype="boolean" mv-mode="edit" aria-label="Done"/>
                        <label property="text" aria-label="Text" mv-mode="edit">
                            <input placeholder="(Text)" value={item.text} onChange={updateTodoList(index)}/>
                        </label>
                    </div>
                </li>)}
            </ul>
        </>)
}
export default List;