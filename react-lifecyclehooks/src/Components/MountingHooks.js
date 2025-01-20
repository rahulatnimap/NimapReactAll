import React, { Component } from 'react'

class MountingHooks extends Component {


    state = {
        counter: 0
    }

    constructor() {
        super();


    }

    handleIncrement() {
        this.state.counter += 1;
    }

    render() {
        return (<div> {this.state.counter}
            <button onClick={this.handleIncrement}>Increment</button>
        </div>)
    }
}

export default MountingHooks;