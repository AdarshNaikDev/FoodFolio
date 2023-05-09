import React from 'react'
import '../styles/Sidebar.css'
import { useNavigate } from 'react-router-dom'

function SideBar() {
    const navigate = useNavigate();
  return (
    
    <>
    <div className='sidebar'>
        <h4 onClick={()=>navigate('/view-recipes')}>
            View all Recipe's
        </h4>
        <h4>
            View your favorite Recipe
        </h4>
    </div>
    </>
  )
}

export default SideBar