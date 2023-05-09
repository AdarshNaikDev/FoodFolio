import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ViewRecipe from "./Components/ViewRecipe";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/view-recipes' element={<ViewRecipe/>}/>
     
    </Routes>
   
  );
}

export default App;
