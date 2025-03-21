import { useState } from 'react';

function StateWithObject(){

    let [carInfo, setInfo] =  useState(
        {
            color: 'Brown',
            brand: 'Toyoto',
            model: 'Sienna',
            year: '2023',
        }
    );

    function changeColor(){
        setInfo(previousState =>{
            return {...previousState, color: 'Red'}
        })
    }


    return (
        <>
            <p>Color of the car {carInfo.color}</p>
            <p>Brand of the car {carInfo.brand}</p>
            <p>Model of the car {carInfo.model}</p>
            <p>Year of the car {carInfo.year}</p>
            <button onClick={changeColor}>Change Color</button>
        </>
    );

}
export default StateWithObject;