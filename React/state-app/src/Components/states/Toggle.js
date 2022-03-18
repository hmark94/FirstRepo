import { useState } from 'react';


function Toggle() {
    const [toggle, setToggle] = useState(false);

    const clickHandler = (e) => {
        setToggle(prev => !prev)
    }

    return (
        <div>
            <button onClick={ clickHandler }>Click Me!</button>
            {toggle ? 'Megjelenhet' : 'Nem jelenhet meg'}
        </div>
    )
}

export default Toggle;