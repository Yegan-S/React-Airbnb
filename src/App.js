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
      <Card/>

    </div>
  );
}
