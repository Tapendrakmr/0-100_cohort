// import { useMemo } from "react";
import { useState,useMemo } from "react";

// // In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// // Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    const expensiveValue = useMemo(()=>{
        console.log('dfdfd')
        let result=1
        for(let i=1;i<=input;i++){
            result=result*i
        }
        return result
    },[input]); 
    // Your solution ends here

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}

// const ExpensiveCalculation = (value) => {
//     return(
//         <div>
//             <p>Value :{value}</p>
//         </div>
//     )
// }

// export function  Assignment1(){
//     const [firstName,setFirstName]=useState("Tapendra")
//     const changeTitle=()=>{
//         setFirstName("My first name is tapendra")
//     }
//     return(
//         <div>
//             <button onClick={changeTitle}>Click me to change</button>
//             <Header title={firstName}/>
//             <Header title ="My name is tapu"/>
//             <Header title ="My name is tapu"/>
//             <Header title ="My name is tapu"/>
//             <Header title ="My name is tapu"/>
//             <Header title ="My name is tapu"/>
//             <Header title ="My name is tapu"/>
            
//         </div>
//     )
// }

// const Header = memo(({ title }) => {
//     console.log('sdfs')
//     return (
//         <h1>{title}</h1>
//     );
// });
// Header.displayName = 'Header';