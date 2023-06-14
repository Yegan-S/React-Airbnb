import React from "react";
import GridPhoto from "./images/gridimage.png";
import './App.css';

export default function Hero(){
    return(
        <section className="Hero">

            <img src={GridPhoto} 
            alt="gridPhoto" className="hero--photo"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.
            </p>

        </section>
    );
}