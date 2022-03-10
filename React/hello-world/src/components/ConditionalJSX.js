
function Conditional() {
    const enableItem = false;

    return (
        <div>
            <p>Elem 1</p>
            <p>Elem 2</p>
            <p>Elem 3</p>
            {enableItem && <p>Elem 4</p>}
            <p>Elem 5</p>
        </div>
    )
}

export default Conditional;