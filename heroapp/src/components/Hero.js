import React from "react";
import Group77 from './images/Group77.png';
export default function Hero(){
    return(
        <section className="hero">
            <img src={Group77} className="hero--photo" alt="1"></img>
            <h1 className="hero--header">Online Experience</h1>
            <p className="hero--text">John unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
        </section>
    )
}