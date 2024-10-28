import { useEffect } from "react";
import { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { FaFireFlameCurved } from "react-icons/fa6";
import PropTypes from 'prop-types';



const Recipes = ({addRecipeToQueue, ToastContainer}) => {
    const [recipes, setRecipes] =useState([]);

    useEffect(() => {
        fetch('../../../../public/fakeData.json')
        .then(res=>res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <div className="w-2/3">
           

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {
                recipes.map(recipe => 


            <div key={recipe.recipe_id} className="card border-2 bg-base-100 shadow-xl">
            <figure className="p-4">
                <img
                className="rounded-xl h-[200px] w-[300px] border-2"
                src={recipe.recipe_image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg text-gray-800 font-medium">{recipe.recipe_name}!</h2>
                <p className="text-gray-600 text-base">{recipe.short_description}</p>
                <h3 className="text-lg text-gray-800 font-medium">Ingredients: {recipe.ingredients.length}</h3>
                <ul className="ml-4">

                    {
                        recipe.ingredients.map((item, indx) => <li className="list-disc" key={indx}>{item}</li>)
                    }



                </ul>

                <div className="flex items-center gap-4">

                    <div className="flex items-center gap-1">

                        <IoTimeOutline className="text-xl"></IoTimeOutline>
                        <p>{recipe.preparing_time} minutes</p>
                   
                    </div>


                    <div className="flex items-center gap-1">
                        <FaFireFlameCurved></FaFireFlameCurved>
                        <p>{recipe.calories} calories</p>
                    </div>

                </div>



                <div className="card-actions justify-center mt-2">
                <button  onClick={() =>addRecipeToQueue(recipe)} className="btn bg-green-400 w-full">Want to Cook
                    <ToastContainer></ToastContainer>
                </button>
                </div>
            </div>
            </div>




                 )
            }

            </div>

            
        </div>
    );
};

Recipes.propTypes = {
    addRecipeToQueue: PropTypes.func.isRequired,
    ToastContainer: PropTypes.func.isRequired,
}

export default Recipes;