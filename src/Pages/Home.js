import React from 'react'
import '../App.css';
import Header from '../Components/Header';
import SideBar from '../Components/SideBar';
import AddRecipeForm from '../Components/AddRecipeForm';
function Home() {
    return (
        <>
            <Header />
            <div className='side-by-side'>
                <SideBar />
                <AddRecipeForm />
            </div>

        </>
    )
}

export default Home