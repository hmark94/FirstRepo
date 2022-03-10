
function CompetitionProps(props) {
    return (
        <div>
            {props.competitors.map((e,i) => {
                return `${i + 1}. helyezés ${e} `
            })}
        </div>
    )
};

export default CompetitionProps;