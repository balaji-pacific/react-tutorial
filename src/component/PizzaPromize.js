let pizzaPromize = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Pizza Delivered")
    }, 3000)
    //resolve("Pizza Delivered")
})

console.log(pizzaPromize);


pizzaPromize.then((msg) => {
    document.getElementById("pizza_status").textContent=msg;
    console.log(msg);
}).catch((error) => {
    console.error("Failed : ", error);
})

// setTimeout(() => {
//     console.log(pizzaPromize);
// }, 4000);



