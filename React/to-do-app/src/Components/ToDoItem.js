import { useState } from 'react';

function ToDoItem({ item, index }) {
    const [done, setDone] = useState(false)
    const clickHandler = (e) => {
        e.preventDefault()
        setDone((prev => !prev))
    }

    return (
        <div>
            <p>{item}</p>
            {done ? <button type="button" onClick={clickHandler}>Done</button> : <button type="button" onClick={clickHandler}>Not Done</button>}
        </div>
    )
}

export default ToDoItem;