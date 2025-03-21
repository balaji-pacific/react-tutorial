import { useState } from 'react';
function StateArray(){
    const [list, setList] = useState([]);
    const [count, setCount] = useState(1);

    function addItem(){
        const itemName = 'Item'+count;
        setList((previousState) => {return [...previousState, itemName]})
        setCount((previousState) => {return previousState+1})
    }

    
    return (<>
        <h2>
            List
        </h2>
        <ul>
            {
                list.map((el,index) => <li key={index}>{el}</li>)
            }                
        </ul>
        <button onClick={addItem}>Add List</button>
    </>)

}

export default StateArray;