import React, { useState, useEffect } from 'react';
import Pagination from '../CreadorRecetas/Pagination/Pagination';
import axios from 'axios';
import RecipePopup from '../CreadorRecetas/RecipePopup/RecipePopup';
import {Link} from 'react-router-dom';
import CardCollection from '../CardCollection/CardCollection';
import { getAuthToken } from '../../MainPage/Login/TokenKey/TokenKey';

function RecipeCollection(){
  const [apiConfig, setApiConfig] = useState({});
const [recipes, setRecipes] = useState([]);
const [selectedRecipe, setSelectedRecipe] = useState(null);
const [recipeDetails, setRecipeDetails] = useState(null);
const [dietCount, setDietCount] = useState(0); // Nuevo estado para contar las dietas

useEffect(() => {
  // Realizar la solicitud GET al backend para obtener las recetas y la cantidad de dietas
  const fetchRecipes = async () => {
    try {
      const authToken = getAuthToken();
      const recipesResponse = await axios.get('http://localhost:3500/api/recetas/user', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setRecipes(recipesResponse.data);
    } catch (error) {
      console.error('Error al obtener recetas:', error);
      // Agrega lógica para manejar el error, por ejemplo, mostrar un mensaje al usuario.
    }
  };

  const fetchDietCount = async () => {
    try {
      const authToken = getAuthToken(); // Obtén el token de autenticación
      const dietCountResponse = await axios.get('http://localhost:3500/api/recetas/collection/count', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setDietCount(dietCountResponse.data.count);
    } catch (error) {
      console.error('Error al obtener la cantidad de dietas:', error);
    }
  };

  const fetchData = async () => {
    try {
      await Promise.all([fetchRecipes(), fetchDietCount()]);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };
  async function fetchConfig() {
    try {
      const response = await axios.get('http://localhost:3500/api/config/config');
      setApiConfig(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error al obtener la configuración:', error);
    }
  };
  fetchConfig();

  fetchData();
}, []); // La dependencia vacía significa que se ejecutará una vez al montar el componente

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

const handleCreateDieta = async () => {
  try {
    // Obtén la lista de IDs de recetas
    const recipeIds = recipes.map((recipe) => recipe.id);
    console.log(recipeIds);
    if (!recipeIds || recipeIds.length === 0) {
      console.warn('recipeIds es null o un array vacío. La función se ha detenido.');
      return;
    }

    const authToken = getAuthToken(); // Obtén el token de autenticación

    // Realiza una solicitud POST para crear una nueva dieta
    const response = await axios.post(
'http://localhost:3500/api/recetas/collection',
{
  recetasIds: recipeIds,
  nombreDieta: `Dieta ${padZeroes(dietCount + 1)}`,
},
{
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
}
);

    console.log('Dieta creada exitosamente', response.data);
    setDietCount((prevCount) => prevCount + 1); // Actualiza el contador de dietas
    window.location.reload();
  } catch (error) {
    console.error('Error al crear la dieta:', error);
  }
};

// Función para agregar ceros a la izquierda del número si es necesario
const padZeroes = (number) => {
  return number.toString().padStart(2, '0');
};

return (
  <div className="container mx-auto p-4 h-screen">
    <h1 className="text-4xl font-bold text-center text-text-sec uppercase mb-4">Mi Colección de Recetas</h1>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {recipes.map((recipe) => (
        <div key={recipe._id} className="col-span-1">
          <CardCollection
            recipe={{
              id: recipe.id,
              title: recipe.title,
              image: recipe.image,
              calories: recipe.calories,
            }}
            onRecipeClick={() => handleRecipeClick(recipe.id)}
          />
        </div>
      ))}
    </div>


    {selectedRecipe && (
      <RecipePopup recipe={recipeDetails} onClose={closeRecipePopup} />
    )}
    
    <div className='flex justify-center aling-center'>
    <button onClick={handleCreateDieta} className="bg-green-500 text-white py-2 px-4 rounded uppercase mt-4 mx-2">
        Crear Dieta con Recetas
      </button>

      <Link to="/dietas">
      <button  className="bg-blue-400 text-white py-2 px-4 rounded uppercase mt-4">
        dietas
      </button>
      </Link>
    </div>
  </div>
);}

export default RecipeCollection;
