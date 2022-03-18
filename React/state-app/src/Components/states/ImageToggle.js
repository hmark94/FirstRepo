import { useState } from 'react'



function ImageToggle() {
    const [toggle, setToggle] = useState(false);

    const clickHandler = (e) => {
        setToggle(prev => !prev)
    }

    const image = <img src="https://placekitten.com/200/200" />

    return (
        <div>
            <button onClick={ clickHandler }>Kattints!</button>
            {toggle && image }
        </div>
    )
}

export default ImageToggle;