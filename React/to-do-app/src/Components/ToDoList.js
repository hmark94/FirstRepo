import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";
import { useState } from 'react';

function ToDoList({ itemsToDo }) {

    return (
        <div>
            {itemsToDo.map((elem, index) => {
                return (<ToDoItem item={elem} key={`todo_id_${index}`} />)
            })}

        </div>
    )
}

export default ToDoList;