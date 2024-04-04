import React from "react"   
import trollface from "./images/trollface.png"
export default function Header(){
    return(
        <header className="header">
            <img src={trollface}  alt="tam" className="header--img"></img>
            <h2 className="header--title">Meme generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
} 
