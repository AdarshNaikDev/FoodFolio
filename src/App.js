import Header from './Components/Header';
import AddRecipeForm from './Components/AddRecipeForm';
import SideBar from './Components/SideBar';
import './App.css'
function App() {
  return (
    <>
    <Header/>
    <div className='side-by-side'>
    <SideBar/>
    <AddRecipeForm/>
    </div>
    
    </>
  );
}

export default App;
