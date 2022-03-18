import React from 'react';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: props.words,
            input: '',
        }
    }

    onChangeHandler(e) {
        this.setState({
            input: e.target.value,
        })
    }

    render() {
        /* const { words } = this.props
            .filter(word => this.state.input === '' || word.includes(this.state.input))
            .map((word, index) => <li key={`listed_${index}`}>{word}</li>); */
        //console.log(words);



        const list = this.state.words
            .filter(word => this.state.input.toLowerCase() === '' || word.includes(this.state.input.toLowerCase()))
            .map((word, index) => <li key={index}>{word}</li>);

        //console.log(list);

        return (<div>
            <input value={this.state.input} type="text" onChange={this.onChangeHandler.bind(this)} />
            <ul>{list}</ul>
        </div>)
    }
}

export default Filter;