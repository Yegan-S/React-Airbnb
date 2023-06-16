import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Card 
      img = "./images/katie.jpg" 
      rating = "5.0"
      viewCount = {6}
      country = "USA"
      title = "Life Lessons with Zaferes"
      price = {136}/>

    </div>
  );
}
