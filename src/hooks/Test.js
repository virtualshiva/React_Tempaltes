import React, { useState, useEffect } from 'react'

const Test = () => {
    const [count, setCount] = useState(1)
    const [value, setValue] = useState(1)

    useEffect(()=>{
        // window.alert('this is comming from winodw.alert function')
        alert("This is comming from the useEffect command")
    },[count])
    
    return (
        <>
            <center>
                <h2>{count}</h2>
                <button className='btn btn-success' onClick={()=>setCount(count + 1)}>increment with 1</button>
                <h2>{value}</h2>
                <button className='btn btn-primary' onClick={()=>setValue(value + 2)}>increment with 2</button>
            </center>
        </>
    )
}

export default Test
