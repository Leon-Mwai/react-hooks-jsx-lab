import React from "react";
import { name, city } from "../data/data.js";

function Home({ name, city }) {
  return (
    <div id="Home">
    <h1 stye={{color: "firebrick"}}>Welcome to {city} my name is {name}</h1>
    </div>
  );
}

export default Home;
