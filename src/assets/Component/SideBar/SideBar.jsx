import PropTypes from 'prop-types';
const SideBar = ({recipeQueue,calculateTimeandCalorise, preparedRecipe, handleRemove, caloriess, times}) => {
   
    return (
        <div className="w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100">
            {/* Want to cook */}


            <div className="overflow-x-auto">
                <h2 className="border-b-2 mx-auto font-semibold flex items-center justify-center">Want to cook: {recipeQueue.length}</h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            recipeQueue.map((recipe, indx) => 
            <tr className="hover" key={indx}>
            <th>{indx + 1}</th>
            <td>{recipe.recipe_name}</td>
            <td className="text-start">{recipe.preparing_time}</td>
            <td className="text-start">{recipe.calories}</td>
            <td> 
                
                
                
                <button  onClick={

                    () => {
                        handleRemove(recipe.recipe_id)
                        calculateTimeandCalorise(recipe.preparing_time, recipe.calories)
                    }
                

                } className="btn bg-green-400 p-3 -ml-5">Prepare

                   
                </button>
            
            
            
            </td>
            
          </tr>)
        }
   
      
    </tbody>
  </table>
            </div>



            {/* prepared recipe */}


            <div className="overflow-x-auto mt-8">
                <h2 className="border-b-2 mx-auto font-semibold flex items-center justify-center">Want to cook: {preparedRecipe.length}</h2>
  <table className="table">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
        {
            preparedRecipe.map((recipe, indx) => 
            <tr className="hover" key={indx}>
            <th>{indx + 1}</th>
            <td>{recipe.recipe_name}</td>
            <td>{recipe.preparing_time}</td>
            <td>{recipe.calories}</td>
            
          </tr>
        )}

        <tr className="hover border-none">
            <th></th>
            <td className="text-[14px] text-start ">Total time={times}</td>
            <td className="text-[14px] text-start">Total Calorise={caloriess}</td>
           



        </tr>
   
      
    </tbody>
  </table>
     </div>





        </div>
    );
};

SideBar.propTypes = {
    recipeQueue: PropTypes.array.isRequired,
    calculateTimeandCalorise: PropTypes.func.isRequired,
    preparedRecipe: PropTypes.array.isRequired,
    handleRemove: PropTypes.func.isRequired,
    caloriess: PropTypes.number.isRequired,
    times: PropTypes.number.isRequired,
}

export default SideBar;