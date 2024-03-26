import React, { Component } from 'react'


export default class Component_Life_Cycle extends Component {

    // to initialize variables before load 
    // if you want to show some value before the page load then we can use constructor
    // render itself is a lifecycle method 
    constructor() {
        super();
        // Usecase: create a button and increment the number
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        console.log("componentDidMount: When component first renders");
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.increment()}>Click Me</button>
            </div>
        );
    }
}