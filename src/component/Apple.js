import { Component } from "react";

class Apple extends Component{
    render() {
        const {fruitInfo} = this.props; 
        const {type,color} = fruitInfo;
        return (
            <h2>I am {type} and {color} Apple!</h2>
        );
    }
}

export default Apple;