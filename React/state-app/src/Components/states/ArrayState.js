import { useState } from 'react';



function ArrayState() {
    const [list, setList] = useState([1, 2, 3, 4]);


    const clickHandler = (e) => {
        //list.splice(0, 1);

        setList(prevArray => {
            const newArray = [...prevArray];
            newArray.splice(0, 1);
            return newArray;
        })

        //Uj elem a tömb végére
        setList(prevArray => {
            const newArray = [...prevArray, 'új elem'];
            return newArray;
        })

        //tömb elem értékének megváltoztatása
        setList(prevArray => {
            const newArray = [...prevArray];
            newArray[0] = 'modositva';
            return newArray;
        })
    }

    return (
        <div>
            <button onClick={clickHandler} >Update</button>
            Elemek: {list}
        </div>
    )
}

export default ArrayState;