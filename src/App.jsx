
import { useState } from 'react'
import './App.css'
import Header from './assets/Component/Header/Header'
import Hero from './assets/Component/Hero/Hero'
import Recipes from './assets/Component/Recipes/Recipes'
import SideBar from './assets/Component/SideBar/SideBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OurRecive from './assets/Component/OuerRecipe/OurRecive'

function App() {

  const [recipeQueue, setRecipeQueue] =useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [times, setTimes] = useState(0);
  const [caloriess, setCalories] = useState(0);


  const handleRemove = id => {
    // find which recipe to remove
    const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id);
    // remove the recipe from the queue
    const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id);

     setRecipeQueue(updatedQueue);
     setPreparedRecipe([...preparedRecipe, deletedRecipe]);



    
  
    
  }

  const calculateTimeandCalorise = (time, calories) => {
    setTimes(time + times);
    setCalories(calories + caloriess);

  }


  const addRecipeToQueue = (recipe) => {

    const isExist = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id);

    if(!isExist){
      setRecipeQueue([...recipeQueue, recipe]);
    }else{
      toast.warn("Item Already selected");
    }

   

  }
 

  return (
   <div>

    <div className='max-w-6xl mx-auto'>
      <Header></Header>
      <Hero></Hero>

      <OurRecive></OurRecive>


      <div className='lg:flex  md:flex-row gap-6 mt-9'>
    <Recipes 
    ToastContainer={ToastContainer} 
    addRecipeToQueue={addRecipeToQueue}>

    </Recipes>

    
    <SideBar

// Props delling

 calculateTimeandCalorise={calculateTimeandCalorise}
  preparedRecipe={preparedRecipe}
  handleRemove={handleRemove}
  recipeQueue={recipeQueue}
  times={times}
  caloriess={caloriess}
  
  
  >
 
 </SideBar>
    </div>
   </div>
    </div>    
  )
}

export default App
