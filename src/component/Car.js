import React from "react";

const REACT_VERSION = React.version;

function Car(props) {
    const {carInfo} = props; 
    const {brand,color} = carInfo;
    return (
        <div>
            <h1>This is my {color} {brand} car!!!</h1>
            <h2>React Version: {REACT_VERSION}</h2>
        </div>
    );
}

export default Car;