import { useState } from "react";

function FormsLearning() {
    // const[name, setName] = useState("");
    // const[email,setEmail] = useState("");
    const [values, setValues] = useState({email:"@"});


    function onClickButton(e) {
        e.preventDefault();
        document.getElementById("name").innerHTML = values.name;
        document.getElementById("lastname").innerHTML = values.lastname;
        document.getElementById("email").innerHTML = values.email;
        document.getElementById("country").innerHTML = values.country;
    }

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setValues((previousValue) => {
            return {...previousValue, [name]:value}
        })
    }

    return <form onSubmit={onClickButton}>
        <label>Enter your Name : <input type="text" name="name" onChange={handleChange} /> </label><br />
        <label>Enter your Last Name : <input type="text" name="lastname" onChange={handleChange} /> </label><br />
        <label>Enter your email : <input type="text" name="email" onChange={handleChange} value={values.email}/> </label><br />
        <label>Select Country : 
            <select type="select" name="country" onChange={handleChange}  values={values.country}>
                <option value="India">India</option>
                <option value="USA">USA</option>
            </select> 
        </label><br />
        
        
        
        <input type="submit" value="Submit"></input>
        <div>
            <p id="name"></p>
            <p id="lastname"></p>
            <p id="email"></p>
            <p id="country"></p>
        </div>
    </form>
}
export default FormsLearning;