
function FuncProps(props) {
    return (
        <div>
            {props.helloFunction()}<br />
            {props.helloFuncVar()}<br />
            {props.dateNow()}<br />
        </div>
    )
}

export default FuncProps;