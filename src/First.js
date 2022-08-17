import React from "react";
import MyLinks from "./MyLinks";

const First = () =>{
    return (
        <>
            <MyLinks/>
            <h2 style={{color : '#ffffff', backgroundColor: 'green', padding: "10px", textAlign: "center", fontSize:40}}>This is the first component</h2>
            <h4 className="hello">This is the added component</h4>
            <hr/>
            <img src="images/lady.jpg" alt="ladies image"/>
        </>
    )
}
export default First