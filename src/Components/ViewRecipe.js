import React, { useEffect } from "react";
import Header from "./Header";

import "../styles/ViewRecipe.css";
import { useSelector } from "react-redux";

function ViewRecipe() {
  const recipeData = useSelector((state) => state?.recipeDataSliceKey?.value);
  //while using use selector to access a state key present in store.js to be provided!!!

  console.log("Recipe Data", recipeData.image);
  

  return (
    <>
      <Header />
      <div className="card-container">
        {recipeData?.map((item) => {
          return (
            <div className="single-card">
              <img src={item.image} />
              <p>{item.recipeName}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ViewRecipe;
