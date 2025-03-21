import Car from "./Car";
import Apple from "./Apple"

function Garage() {
    const carInfo = { brand: "Toyoto Sienna", color: "Brown" }
    const fruitInfo = { type: "Golden delicious", color: "Red" }
    //const fruitInfo = { }
    const condition = fruitInfo.type != null && fruitInfo.color != null
    const isGarageDoorOpen = false
    const carList = [
        { brand: "Tesla Y", color: "Red" },
        { brand: "Ford Mustang", color: "Green" },
        { brand: "Honda Accord", color: "Black" },
        { brand: "BMW", color: "X7" }
    ];

    const listNum = [1,2,3,4,5,6,7,8,9];
    return (
        
        <>
            <h1>What is parked in Garage</h1>
            <Car carInfo={carInfo} />
            {
                condition && <Apple fruitInfo={fruitInfo} />
            }
            {isGarageDoorOpen ? <h1>Door is Open</h1> : <h1>Door is Closed</h1>}
            <ul>
                {
                    carList.map((carInfo) => (<li key={carInfo.brand}> <Car carInfo={carInfo}></Car></li>) )
                }
            </ul>
            <li>
                {
                    listNum.map((listN, index) => (<p key= {index}>{listN}</p>))
                }
            </li>
        </>
    );
}

export default Garage