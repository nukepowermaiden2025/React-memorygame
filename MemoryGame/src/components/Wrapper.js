import React from "react";
import "./Wrapper.css";

//using props.children so that the properties can be passed down from parent
const Wrapper = props =>{
    return(
        <div className="wrapper container">
            {props.children}
        </div>
    )

} 

export default Wrapper;

