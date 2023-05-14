import { createSlice } from '@reduxjs/toolkit'

const RecipeDataSlice = createSlice({ // your slice
  name: 'recipeData',
  initialState: {
    value: []
  },
  reducers: { // recipe data reducer
   
    addRecipeObj : (state, action) =>{ //Action 
        state.value.push(action.payload)
    }
   
  },
})


export const { addRecipeObj } = RecipeDataSlice.actions

export default RecipeDataSlice.reducer