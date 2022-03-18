import React from 'react';

class Header extends React.Component {

    constructor(props) {
        console.log('Constructor called');
        super(props);

        this.state = {
            showSubtitle: true,
        }
    }

    componentDidMount() {
        console.log('Component Did Mount')
    }

    handleClick(event) {
        console.log('handleClick called', event.target)
    }

    componentDidUpdate() {
        console.log('component did update')
    }

    render() {

        const { title, subtitle } = this.props;
        console.log('Header render')
        return (
            <header>
                <h1>{title}</h1>
                {this.showSubtitle && <h2> {subtitle} </h2>}
                <button type="button" onClick={this.handleClick}>Click Me!</button>
            </header>
        )
    }
}


export default Header;