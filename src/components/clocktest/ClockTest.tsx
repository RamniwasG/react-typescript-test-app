import React, { Component } from 'react';

type ClockState = {
    time: Date
}

class ClockTest extends Component<{}, ClockState> {

    tick() {
        this.setState({
            time: new Date()
        })
    }

    UNSAFE_componentWillMount() {
        this.tick()
    }

    componentDidMount() {
        setTimeout(() => this.tick(), 1000)
    }

    render() {
        return <React.Fragment>
            <h2>Current time updated in develop A, B branch :</h2>
            <h3>{this.state.time.toLocaleTimeString()}</h3>
        </React.Fragment>
    }
}

export default ClockTest