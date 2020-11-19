import "./Container.css";
import React from "react";



export default (props) => {

    const contStyle = {
        width: props.width,
    }

    return (
        <div className="container" style={contStyle}>
           {props.children}
        </div>
    );
};
