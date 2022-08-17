import React, { useState } from 'react'

const increment = () => {
    const [value, setValue] = useState(0)

    // const decrease =()=>{
    //     if (value < 1){
    //         let a = prompt("value is less than 1 do you want to continue it, press y/n ")
    //         if (a == 'y'){
    //             setValue(value-1)
    //         }

    //     }
    //     else{
    //         setValue(value-1)
    //     }
        
    // }

    // value is varaible in this condition 
    //initial value of value in this case is 1
    //setValue is a funtion which state the value according to the condition
    return (
        <>
            <center>
                
                <h2 className='mt-5'>{value}</h2>
                {value<=20 &&
                <button className='btn btn-warning' onClick={()=>setValue(value+1)}>Increment</button>
                }
                &nbsp;&nbsp;

                {value >= 1&&
                <button className='btn btn-danger' onClick={()=> setValue(value-1)}>Decrement</button>
                } 
            </center>
        </>
    )
}

export default increment
