import { configureStore } from "@reduxjs/toolkit";
import RecipeDataSlice from "./RecipeDataSlice";
export default configureStore({
    reducer:{
        recipeDataSliceKey : RecipeDataSlice 
    }
})