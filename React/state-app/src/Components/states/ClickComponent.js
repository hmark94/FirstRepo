import { useState } from "react";

function ClickComponent() {
    const [clicked, setClicked] = useState(false);

    const clickHandler = (event) => {
        setClicked(true);
    }

    //console.log('Lefutott')

    return (
        <>
            <button onClick={clickHandler}>Hello</button>
            clicked valtozo ertek: {String(clicked)}
        </>
    )
}

export default ClickComponent;