import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardCollection from '../../CardCollection/CardCollection';
import {getAuthToken} from '../../../MainPage/Login/TokenKey/TokenKey'
import CardInDieta from '../CardInDieta/CardInDieta';
import RecipePopup from '../../CreadorRecetas/RecipePopup/RecipePopup';

const DietaCard = ({ recetasIds }) => {
  const [apiConfig, setApiConfig] = useState({});

  const [recetas, setRecetas] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const authToken = getAuthToken(); // Obtén el token de autenticación
  useEffect(() => {
    const fetchRecetas = async () => {
      try {

        const promises = recetasIds.map((id) =>
          axios.get(`http://localhost:3500/api/recetas/${id}`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
        );

        const responses = await Promise.all(promises);
        const recetasData = responses.map((response) => response.data);
        setRecetas(recetasData);
      } catch (error) {
        console.error('Error al obtener recetas de la dieta:', error);
      }
      async function fetchConfig() {
        try {
          const response = await axios.get('http://localhost:3500/api/config/config');
          setApiConfig(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Error al obtener la configuración:', error);
        }
      }
  
      fetchConfig();
    };


    fetchRecetas();
  }, [recetasIds]);
  const handleRecipeClick = async (recipeId) => {
    setSelectedRecipe(recipeId);
    fetchRecipeDetails(recipeId);
  };

  const closeRecipePopup = () => {
    setSelectedRecipe(null);
    setRecipeDetails(null);
  };
  const fetchRecipeDetails = async (recipeId) => {
    const options = {
      method: 'GET',
      url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`,
      params: {
        includeNutrition: false
      },
      headers: {
        'X-RapidAPI-Key': `${apiConfig.apiKey}`,
        'X-RapidAPI-Host': `${apiConfig.apiHost}`
      }
    };

    try {
      const response = await axios.request(options);
      setRecipeDetails(response.data);
    } catch (error) {
      console.error('Error al obtener detalles de la receta:', error);
    }
  };  

  return (
    <div className="container mx-auto p-4">
      <div className='flex items-center justify-center m-5 font-bold '>
      <button className='bg-button-2 rounded-xl p-2'>Borrar dieta</button>
      </div>

      <h3 className="text-2xl uppercase text-center text-white font-semibold mb-2">Dieta</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {recetas.map((recipe) => (
          <div key={recipe._id} className="mb-4">
            <CardInDieta
              recipe={{
                id: recipe._id,
                title: recipe.title,
                image: recipe.image,
                calories: recipe.calories,
              }}
              onRecipeClick={() => handleRecipeClick(recipe.id)}
            />
          </div>
        ))}
        {selectedRecipe && (
        <RecipePopup recipe={recipeDetails} onClose={closeRecipePopup} />
      )}
        
      </div>
      <div>

      </div>
    
    </div>
  );
};

export default DietaCard;
