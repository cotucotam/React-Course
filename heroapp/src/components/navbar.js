import React from "react"
import logo from './images/logo.png';

export default function Navbar(){
    return(
        <nav>
            <img src={logo} alt="cotam" className="nav--logo"></img>
        </nav>
    )
}