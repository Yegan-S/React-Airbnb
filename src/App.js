import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import data from "./data";
import './App.css';

export default function App() {

  const cards = data.map(item => {
    return (
      <Card 
      key = {item.id}
      item = {item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}
