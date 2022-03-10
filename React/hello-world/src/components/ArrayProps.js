
function ArrayProps(props) {
    return (
        <div>
            {props.array}<br />
            {props.array.map(e => e % 2 == 0 ? e : null)}<br />
            {props.array.map((e) => {
                return <strong>{e}</strong>
            })}
        </div>
    )
};

export default ArrayProps;