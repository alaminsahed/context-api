import React from "react";
import { createContext } from "react";
import { useState } from "react";
import "./App.css";
import Home from "./Component/Home/Home";
import Ship from "./Component/Ship";
import Header from "./Header";

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState(0);
  return (
    <CategoryContext.Provider value={[category,setCategory]}>
      <Home />
      <Header/>
      <Ship />
    </CategoryContext.Provider>
  );
}

export default App;
