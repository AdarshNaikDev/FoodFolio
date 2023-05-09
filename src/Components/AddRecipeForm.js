import React,{useEffect, useState} from 'react'
import '../styles/Form.css'
import { useDispatch } from 'react-redux';
import {addRecipeObj} from '../Store/RecipeDataSlice';
function AddRecipeForm() {
  const dispatch = useDispatch();
  const[recipeFrmData,setRecipeFrmData] = useState({
    recipeName:"",ingredientList:"", cookingSteps:"",prepareTime:"", level:"",rCategory:"",originFrom:"",serves:"", image:"",rating:"",
    authorName:"",dateCreated:""
  })
let name ,value;
  function handleInput(e){
  console.log(e);
    name = e.target.name;
    value = e.target.value;
    setRecipeFrmData({...recipeFrmData, [name]:value })
  }

  const submitRecipe = ()=>{
    dispatch(addRecipeObj(recipeFrmData))
  }

  useEffect(()=>{
    console.log("event triggered as form state changed")
    console.log(recipeFrmData)
  },[recipeFrmData])
  return (
    
      <div className='form-div'>
        <input type='text' placeholder='Recipe name' name='recipeName' value={recipeFrmData.recipeName} onChange={handleInput}/>
        <textarea placeholder='Ingredients list' name='ingredientList'value={recipeFrmData.ingredientList}onChange={handleInput}/>
        <textarea placeholder='Cooking instructions' name="cookingSteps" value={recipeFrmData.cookingSteps}onChange={handleInput}/>
        <input type='number' placeholder='Preparation time in hours' name = "prepareTime" value={recipeFrmData.prepareTime}onChange={handleInput}/>
        <select placeholder='select' name='level' value={recipeFrmData.level} onChange={handleInput}>
          <option>select</option>          
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <select placeholder='Recipe category' name='rCategory' value={recipeFrmData.rCategory} onChange={handleInput}>
          <option>select</option>          
          <option>appetizers</option>
          <option>entrees</option>
          <option>desserts</option>
        </select>

        <select placeholder='Recipe category' name="originFrom" value={recipeFrmData.originFrom} onChange={handleInput}>
          <option>select</option>          
          <option>Indian</option>
          <option>Italian</option>
          <option>Mexican</option>
        </select>
        <input type='text' placeholder='serving size' name='serves' value={recipeFrmData.serves} onChange={handleInput}/>
        <input type = 'file' placeholder='Recipe photo/image' name='image' value={recipeFrmData.image} onChange={handleInput}/>
        <input type = 'text' placeholder='Rating' name='rating' value={recipeFrmData.rating} onChange={handleInput}/>
        <input type='text' placeholder='Author name' name='authorName' value={recipeFrmData.authorName} onChange={handleInput}/>
        <input type = 'date' placeholder='Date Created' name='dateCreated' value={recipeFrmData.dateCreated} onChange={handleInput}/>
        <button onClick={submitRecipe}>Add Recipe</button>
      </div>
      
    
  )
}

export default AddRecipeForm;