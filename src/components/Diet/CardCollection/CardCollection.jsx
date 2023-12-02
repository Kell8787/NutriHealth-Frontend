import React from 'react';
import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_API_URL}/api/`; 

const CardCollection = ({ recipe, onRecipeClick }) => {
  const handleDeleteClick = async () => {
    try {
      // Realiza una solicitud DELETE al backend para eliminar la receta
      await axios.delete(`${BASE_URL}:3500/api/recetas/${recipe._id}`);
      // Llama a la función onDeleteClick con el id de la receta
      window.location.reload();
    } catch (error) {
      console.error('Error al eliminar la receta:', error);
    }
  };

  return (
    <div className="max-w-xs overflow-hidden  bg-button-2 rounded-lg shadow-lg p-4 flex flex-col h-full">
      <div className="flex-shrink-0">
        <img
          className="w-full h-40 object-cover object-center mb-4"
          src={recipe.image}
          alt={recipe.title}
        />
      </div>
      <div className="text-black flex-grow">
        <h3 className="text-lg text-center text-main-3 font-semibold mb-2 line-clamp-2">{recipe.title}</h3>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={onRecipeClick}
          className="bg-button-1 m-1 text-white py-2 px-4 rounded-xl focus:outline-none focus:ring focus:border-blue-300 hover:scale-110 transition-transform duration-300"
        >
          Ver Detalles
        </button>
        <button
          onClick={handleDeleteClick}
          className="bg-red-500 m-1 text-white py-2 px-4 rounded-xl focus:outline-none focus:ring focus:border-blue-300 hover:scale-110 transition-transform duration-300"
        >
          Borrar
        </button>
      </div>
    </div>
  );
};

export default CardCollection;
