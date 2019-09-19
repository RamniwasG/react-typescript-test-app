import React, { Component } from 'react';

type defProps = {
    title: string
}

class ComponentWithDefaultProps extends Component<defProps> {
    static defaultProps = {
        title: "this is default title"
    }

    render() {
        return (
            <h5>{this.props.title}</h5>
        )
    }
}

export default ComponentWithDefaultProps