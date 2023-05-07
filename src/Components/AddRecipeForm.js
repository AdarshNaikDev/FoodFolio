import React from 'react'
import '../styles/Form.css'
function AddRecipeForm() {
  return (
    <form>
      <div className='form-div'>
        <input type='text' placeholder='Recipe name'/>
        <textarea placeholder='Ingredients list'/>
        <textarea placeholder='Measurement of each ingredient'/>
        <textarea placeholder='Cooking instructions'/>
        <input type='number' placeholder='Preparation time in hours'/>
        <select placeholder='select'>
          <option>select</option>          
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <select placeholder='Recipe category'>
          <option>select</option>          
          <option>appetizers</option>
          <option>entrees</option>
          <option>desserts</option>
        </select>

        <select placeholder='Recipe category'>
          <option>select</option>          
          <option>Indian</option>
          <option>Italian</option>
          <option>Mexican</option>
        </select>
        <input type='text' placeholder='serving size'/>
        <input type = 'file' placeholder='Recipe photo/image'/>
        <input type = 'text' placeholder='Rating'/>
        <input type='text' placeholder='Author name'/>
        <input type = 'date' placeholder='Date Created'/>
        <button>Add Recipe</button>
      </div>
      
    </form>
  )
}

export default AddRecipeForm;