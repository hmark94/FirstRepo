

function AnimalCard(props) {

    return (
        <div>
            id: {props.obj.id} <br />
            name: {props.obj.name}<br />
            species: {props.obj.species}<br />
            age: {props.obj.age}<br />
            {props.obj.pedigree && <>pedigree: {props.obj.pedigree ? 'Van' : 'Nincs'}</>}<br />
            {props.obj.other && <>other: {props.obj.other}</>} <br />
        </div>
    )
}

export default AnimalCard;