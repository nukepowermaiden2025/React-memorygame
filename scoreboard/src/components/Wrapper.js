import React from "react";
import "./Wrapper.css";

//using props.children so that the properties can be passed down from parent
const Wrapper = props => <div className="wrapper">{props.children}</div>;

export default Wrapper;

