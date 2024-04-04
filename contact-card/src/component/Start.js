import React from "react";
import startempty from "./image/startempty.png"
import startfull from "./image/startfull.png"

export default function Start(props){
    let startIcon = props.isFilled ?startfull:startempty
    return(
        <img src={startIcon}
        className='card--favoritte' alt='hinh 2'
        onClick={props.handleClick}></img>
    )
}