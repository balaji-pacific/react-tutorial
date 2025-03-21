import React from "react";
class StateComponent extends React.Component{
    
    constructor(){
        super();
        this.state = {color: "Red"}
    }
    
    render(){
        return (
            <>
                <h1>This color will thange through state component as {this.state.color}</h1>
                <button onClick={() => {
                    if(this.state.color === 'Red')
                        this.setState({color: 'Blue'})
                    else
                    this.setState({color: 'Red'})
                }}>Change Color</button>
            </>
        )
    }
}

export default StateComponent;