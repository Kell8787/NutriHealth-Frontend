// CardCollection.js
import React from 'react';
import axios from 'axios';

const CardInDieta = ({ recipe, onRecipeClick}) => {

  return (
    <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg p-4 flex flex-col h-full">
      <div className="flex-shrink-0">
        <img
          className="w-full h-40 object-cover object-center mb-4"
          src={recipe.image}
          alt={recipe.title}
        />
      </div>
      <div className="text-black flex-grow">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{recipe.title}</h3>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={onRecipeClick}
          className="bg-gray-700 text-white py-2 px-4 rounded mr-2"
        >
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

export default CardInDieta;
