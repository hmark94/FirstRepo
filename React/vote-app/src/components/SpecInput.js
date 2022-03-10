

function SpecInput(props) {

    const name = props.name;
    return (
        <label htmlFor={name}> {props.labelText}
            <input type="text" name={name} id={name} />
        </label>
    )
}

export default SpecInput;