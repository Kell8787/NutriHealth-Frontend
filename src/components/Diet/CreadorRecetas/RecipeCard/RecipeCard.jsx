import React from 'react';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { getAuthToken } from '../../../MainPage/Login/TokenKey/TokenKey';
function RecipeCard({ recipe, addToCollection, OnRecipeClick }) {
  const calories = recipe.nutrition ? recipe.nutrition.nutrients.find((nutrient) => nutrient.name === 'Calories') : null;
  const caloriesAmount = calories ? calories.amount.toFixed(2) : 'No disponible';
  const [fav, setFav] = useState(false);
  const authToken = getAuthToken();
  console.log(authToken);
  const toggleFav = () => {
    setFav(!fav);
  };

  const favAction = (recipe) => {
    toggleFav();
    addToCollection(recipe);
  };

  return (
    <>
      <div className="max-w-xs overflow-hidden  rounded-xl shadow-lg p-4 grid grid-rows-4 gap-4 font-baloo bg-main-1 hover:bg-main-2 hover:scale-110 transition-transform duration-200">
        <div className="row-span-2">
          <img
            className="w-full h-40 object-cover object-center mb-4 rounded-xl"
            src={recipe.image}
            alt={recipe.title}
          />
        </div>
        <div className="text-black row-span-1">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{recipe.title}</h3>
          <p className="mb-2">Calorías: {caloriesAmount} kcal</p>
        </div>
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 mt-4 row-span-1">
          <button
            onClick={() => favAction(recipe)}
            className={
              fav
                ? 'bg-red-500 text-white py-2 px-4 rounded hover:text-slate-500 hover:scale-125 transition-transform duration-200'
                : 'bg-slate-400 text-white py-2 px-4 rounded hover:text-red-500 hover:scale-125 transition-transform duration-200'
            }
          >
            <FaHeart />
          </button>
          <button
            onClick={OnRecipeClick}
            className="bg-button-1 text-white text-lg w-full md:w-auto py-2 px-4 rounded hover:font-bold hover:scale-110 hover:underline transition-transform duration-200"
          >
            Ver Detalles
          </button>
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
