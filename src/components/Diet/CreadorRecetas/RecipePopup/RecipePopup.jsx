import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import { FaHeart } from 'react-icons/fa';

const RecipePopup = ({ recipe, onClose, fav}) => {
  if (!recipe) {
    return null;
  }

  const { title, image, extendedIngredients, instructions } = recipe;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
      <div className="max-w-3xl w-full bg-button-2 p-8 rounded-lg shadow-md flex flex-col md:flex-row relative font-baloo">
        <div className="flex-shrink-0 w-full md:w-1/2 pr-0 md:pr-8">
          <img src={image} alt={title} className="w-full h-full object-cover mb-4 rounded-3xl" />
        </div>

        <div className="flex-grow">
          <button
            className="absolute -top-1 pt-1 left-1 text-white text-xl cursor-pointer hover:text-red-500 hover:scale-125 transition-transform duration-300"
            onClick={onClose}
          >
            <IoMdCloseCircle className="w-10 h-10" />
          </button>
          <h2 className="text-2xl text-white uppercase bg-main-2 rounded-xl font-bold mb-4">{title}</h2>

          <div className="max-h-48 overflow-y-auto mb-4 bg-main-1 rounded-xl">
            <h3 className="text-xl font-bold mb-2 pt-3 text-white uppercase">Ingredientes</h3>
            <ul>
              {extendedIngredients.map((ingredient, index) => (
                <li key={index} className="text-text-sec">{ingredient.original}</li>
              ))}
            </ul>
          </div>

          <div className="max-h-48 overflow-y-auto bg-button-1 rounded-xl">
            <h3 className="text-xl font-bold mb-2 uppercase text-white pt-3">Instrucciones</h3>
            <div className="text-text-sec" dangerouslySetInnerHTML={{ __html: instructions }}></div>
            
          </div>
          {/* <button className={
              fav
                ? 'bg-red-500 text-white py-2 px-4 rounded hover:text-slate-500 hover:scale-125 transition-transform duration-200'
                : 'bg-slate-400 text-white py-2 px-4 rounded hover:text-red-500 hover:scale-125 transition-transform duration-200'
            }><FaHeart/></button> */}
        </div>
      </div>
    </div>
  );
};

export default RecipePopup;
