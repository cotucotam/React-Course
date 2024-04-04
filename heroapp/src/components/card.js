import React from "react";
import Start from './images/Start.png';

export default function Card(props){
 
    let badgeText
    if(props.item.openSpots ===0){
        badgeText="SOLD OUT"
    }else if(props.item.location === "Online"){
        badgeText="ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            {/* <img src={props.img}className="card--image" alt="2"></img> */}
            <img src={require(`./images/${props.item.coverImg}`)}className="card--image" alt="2"></img>
            <div className="card--stats">
                <img src={Start} alt="3" className="card-stat"></img>
                <span>props.rating</span>
                <span className="gray">{props.item.reviewCount} • </span>
                <span className="gray">{props.item.country}</span>
            </div>
            <p >{props.item.title}s</p>
            <p > <span className="bold">From ${props.item.price} / person</span></p>
        </div>
    )
}