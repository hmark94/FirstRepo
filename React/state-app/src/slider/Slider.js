import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: Math.floor(props.images.length / 2),
        }
    }

    onClickLeft = (e) => {
        e.preventDefault();

        if (this.state.index > 0) {
            this.setState({
                index: this.state.index - 1,
            })
        }
    }

    onClickRight = (e) => {
        e.preventDefault();

        if (this.state.index < this.props.images.length - 1) {
            this.setState({
                index: this.state.index + 1,
            })
        }
    }

    render() {
        const { images } = this.props;
        const { index } = this.state;

        return (
            <div>
                <button type='button' onClick={this.onClickLeft} ><FontAwesomeIcon icon={faChevronLeft} /></button>
                <img src={images[index]} />
                <button type='button' onClick={this.onClickRight} ><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
        )
    }
}

export default Slider;