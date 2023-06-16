import React from "react";
import Starimage from "./images/star.png";


export default function Card(props){
    let badgeText
    if (props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if(props.item.location === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="Card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../image/${props.item.coverImg}`}
            alt="img" className="card--image"/>
            <div className="card--stats">
                <img src={Starimage}
            alt="Starimage" className="star--image"/>
            <span>{props.item.stats.rating}</span>
            <span className="grey">({props.item.stats.reviewCount}) • </span>
            <span className="grey"> {props.item.location}</span>

            </div>

            <p className="card--title">{props.item.title}</p>
            <p> <span className="bold card--price" >From ${props.item.price} </span>/ person</p>
        
        </div>
    );
}