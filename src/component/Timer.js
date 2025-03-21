import { useEffect, useState } from "react";

function Timer(){
    
    const [count, setCount] = useState(0);

    useEffect(() => {
        //console.log("Screen Rendered!")
        //checkCount()
        //setCount(1)
        setTimeout(() => {
            setCount((previousValue) => {return previousValue + 1})
        }, 1000)
    },[count])

    // function checkCount(){
    //     if(count >10){
    //         setCount(0)
    //     }

    // }

    // function updateCount(){
    //     setCount((previousstate) => {            
    //         return previousstate+1
    //     })
    // }

    return (
        <>
            <h1>Rendered {count} times!</h1>
            <button >Hit Count</button>
        </>
    )
}
export default Timer;