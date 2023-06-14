import React from "react";
import airbnbphoto from "./images/Airbnb.jpg"
import './App.css';

export default function Navbar(){
    return(
        <nav className="Navbar">
            <img src={airbnbphoto} 
            alt="airbnb"/>

        </nav>
    );
}