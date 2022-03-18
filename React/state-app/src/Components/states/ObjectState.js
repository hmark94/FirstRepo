import { useState } from 'react';



function ObjectState() {
    const [obj, setObj] = useState({ id: 1, product_name: 'iPhone 8' });


    const clickHandler = (e) => {

        setObj(prevObj => {
            const newObj = { ...prevObj }
            newObj.product_name = 'iPhone 12';
            return newObj;
        })
    }

    return (
        <div>
            <button onClick={clickHandler} >Update</button>
            Elemek: {obj.product_name}
        </div>
    )
}

export default ObjectState;