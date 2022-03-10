
function ShowItem(props) {
    return (
        <div>
            A(z) {props.selectedIndex} indexen a következő érték van: {props.getItem(props.selectedIndex)}<br />
        </div>
    )
}

export default ShowItem;