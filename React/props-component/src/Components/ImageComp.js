


function ImageComp(props) {
    return (
        <>
            <div className="image-container">
                <div className="image">
                    <img src="https://placekitten.com/200/200" />
                </div>
                <div class="image-label">
                    {props.title}
                </div>
            </div>

            <div className="image-container">
                <div className="image">
                    <img src="https://placekitten.com/200/200" />
                </div>
                <div className="image-label">
                    <h2>{props.title}</h2>
                </div>
            </div>

            <div className="image-container">
                <div className="image">
                    <img src="https://placekitten.com/200/200" />
                </div>
                <div className="image-label">
                    {props.button}
                </div>
            </div>
        </>
    )
}

export default ImageComp;