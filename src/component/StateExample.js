import { useState } from 'react';

function StateExample(){
    let [color, setColor] = useState('Blue')
    let [count, setCount] = useState(0)
    
    return(
        <>
            <h1>This is {color} color</h1>
            <button onClick={() => {
                if(color === 'Red')
                    setColor('Blue')
                else
                    setColor('Red')
                }}>Change Color</button>
            <h1>The Value is {count}</h1>
            <button onClick={() => {setCount(count= count+1)}} >Hit Me</button>
        </>)
    
}

export default StateExample;