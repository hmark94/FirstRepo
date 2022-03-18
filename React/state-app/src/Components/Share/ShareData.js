import Child1 from "./Child1";
import Child2 from "./Child2";
import { useState } from 'react';


function ShareData() {

    const [data, changeData] = useState('');

    //console.log(data);

    return (
        <div>
            <Child1 changeData={changeData} />
            <Child2 />
        </div>
    )
}

export default ShareData;