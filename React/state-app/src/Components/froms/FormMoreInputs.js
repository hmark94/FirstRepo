import { useState } from 'react';


function FormMoreInput() {
    const [data, setData] = useState({
        email: '',
        country: '',
        description: '',
    })

    const submitHandler = (e) => {
        e.preventDefault();

    }

    const changeHandler = (e) => {
        setData(prev => {
            const newData = { ...prev };
            newData[e.target.name] = e.target.value;
            return newData;
        })
    }

    //console.log(data)

    return (
        <form onSubmit={submitHandler}>
            Email: <input type="text" name="email" onChange={changeHandler} /><br />
            Ország: <select name="country" onChange={changeHandler} defaultValue="">
                <option value="" >Válassz</option>
                <option value="Hungary">Hungary</option>
                <option value="Austria">Ausztria</option>
                <option value="USA">USA</option>
            </select><br />
            Leírás: <textarea name="description" onChange={changeHandler}></textarea>
            <button type="submit" name="save">Mentés</button>
        </form>
    )
}

export default FormMoreInput;