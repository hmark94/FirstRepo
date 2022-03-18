
import { useState } from 'react';


function ToDoForm(props) {
    const [todo, setToDo] = useState({
        todo: '',
        isDone: false
    })

    const submitHandler = (e) => {
        e.preventDefault()
        setToDo(prev => {
            const newObj = { ...prev };
            newObj.todo = e.target.value
            return newObj
        })

    }

    const changeHandler = (e) => {
        setToDo(prev => {
            const newObj = { ...prev }
            newObj[e.target.name] = e.target.value
            return newObj
        })
    }
    //console.log(todo)
    //console.log(data)

    return (
        <form onSubmit={submitHandler}>
            <input name="todo" placeholder="What's next?" onChange={changeHandler} />
            <button type="submit" name="save">Hozzáad</button>
            {/* {todo.todo} */}
        </form>
    )
}

export default ToDoForm;