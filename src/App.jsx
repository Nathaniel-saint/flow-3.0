import React from "react";
import './index.css'
import Nav from "./pages/Nav";
import Hero from "./pages/Hero";

// import goes up here

function App(){
  return(
    <div className="container">
      <Nav />
      <Hero />
    </div>
  );
}

export default App;