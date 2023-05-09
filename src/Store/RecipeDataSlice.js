import { createSlice } from '@reduxjs/toolkit'

export const RecipeDataSlice = createSlice({
  name: 'recipeData',
  initialState: {
    value: []
  },
  reducers: {
   
    addRecipeObj : (state, action) =>{
        state.value.push(action.payload)
    }
   
  },
})


export const { addRecipeObj } = RecipeDataSlice.actions

export default RecipeDataSlice.reducer