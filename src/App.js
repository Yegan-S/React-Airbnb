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
      img = {item.coverImg}
      rating = {item.stats.rating}
      reviewCount = {item.stats.reviewCount}
      location = {item.location}
      title = {item.title}
      price = {item.price}
      openSpots = {item.openSpots}
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
