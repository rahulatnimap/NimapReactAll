import React, { Component } from 'react'

class MountingHooks extends Component {




    constructor() {
        super();
        console.log("class");

    }

    state = {
        count: 0
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    componentDidMount() {
        console.log("Mounting pahse");

    }

    componentDidUpdate() {
        console.log(this.state.count);

    }
    render() {
        console.log("render");
        return (<div> {this.state.count}
            <button onClick={this.handleIncrement}>Increment</button>
        </div>)
    }
}

export default MountingHooks;