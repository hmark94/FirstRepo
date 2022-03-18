import { useState } from "react";


function Counter() {
    const [count, setCount] = useState(0);

    const clickHandler = (e) => {
        const countCallBack = (prev) => {
            return prev + 1;
        }

        setCount(countCallBack);
    }

    return (
        <>
            <button onClick={clickHandler}>Counter +</button><br />
            Count értéke: {count}
        </>
    )
}

export default Counter;