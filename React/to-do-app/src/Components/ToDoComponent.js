import { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';



function ToDoComponent() {
    const [parentItem, setParentItem] = useState('');
    const [arrItem, setArray] = useState([])

    return (
        <div>
            <h1>To-Do List</h1>
            <ToDoList itemsToDo={arrItem} />
            <ToDoForm todo={setParentItem} array={setArray} />
        </div>
    )
}

export default ToDoComponent;