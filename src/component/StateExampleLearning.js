import { useState } from "react";

function StateExampleLearning(){
    const [count, setCount] = useState(0);

    function increaseCount(){
        setCount((count) => {
            count = count + 1;
            return count;
        });
    }
    return(
        <>
        <h1>Counting {count} </h1>
        <button onClick={increaseCount}>Count</button>
        </>
    );
}
export default StateExampleLearning;