import {useState} from 'react';

function Child1({changeData}) {

    const [data, setData] = useState('');

    const changeHandler = (e) => {
        setData(e.target.value);
        changeData(e.target.value);
    }

    //console.log('Child: ' , data)
    return (
        <div>
            <form>
                <input type="text" name="data" onChange={changeHandler} /><br />
                Child1 data: {data}
            </form>
        </div>
    )
}

export default Child1;