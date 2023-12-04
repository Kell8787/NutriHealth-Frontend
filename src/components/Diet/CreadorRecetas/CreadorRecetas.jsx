import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard/RecipeCard';
import RecipePopup from './RecipePopup/RecipePopup';
import Pagination from './Pagination/Pagination';
import { getAuthToken } from '../../MainPage/Login/TokenKey/TokenKey';




function CreadorRecetas() {
  const [apiConfig, setApiConfig] = useState({});
  const [calorieLimit, setCalorieLimit] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const recipesPerPage = 10;
  const authToken = getAuthToken();
  console.log(authToken);

  useEffect(() => {
    const BASE_URL = `${import.meta.env.VITE_API_URL}/api/`; 
    // Hacer la solicitud al servidor para obtener las claves de API
    async function fetchConfig() {
      try {
        const response = await axios.get(`${BASE_URL}config/config`);
        setApiConfig(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error al obtener la configuración:', error);
      }
    }

    fetchConfig();
  }, []); // Se ejecuta una vez al montar el componente

  const handleRecipeClick = (recipeId) => {
    setSelectedRecipe(recipeId);
    fetchRecipeDetails(recipeId);
  };

  const closeRecipePopup = () => {
    setSelectedRecipe(null);
    setRecipeDetails(null);
  };
  const options = {
    method: 'GET',
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch`,
    params: {
      sort: 'calories',
      maxCalories: calorieLimit,
      minCalories: calorieLimit - 100,
      number: 150,
      offset: (currentPage - 1) * recipesPerPage,
    },
    headers: {
      'X-RapidAPI-Key': `${apiConfig.apiKey}`,
      'X-RapidAPI-Host': `${apiConfig.apiHost}`
    }
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

  const handleSearch = async () => {
    if (!calorieLimit) {
      alert('Por favor, ingrese un valor para las calorías.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setRecipes(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.error('Hubo un problema con la solicitud de recetas:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };


  const addToCollection = async (recipe) => {
    try {
      // Verificar si hay un token de autenticación
      if (!authToken) {
        console.error('No hay token de autenticación.');
        // Puedes redirigir a la página de inicio de sesión u tomar otras medidas según tus necesidades.
        return;
      }
  
      // Si llega hasta aquí, la receta no está en la colección y puede agregarla
      const response = await axios.post(
        'http://localhost:3500/api/recetas/createReceta',
        {
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          calories: recipe.nutrition?.nutrients.find((nutrient) => nutrient.name === 'Calories')?.amount,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
  
      console.log('Receta agregada a la colección:', response.data);
      // Puedes agregar lógica adicional, como actualizar el estado en tu componente.
    } catch (error) {
      console.error('Error al agregar la receta a la colección:', error);
      // Puedes manejar el error según tus necesidades.
    }
  };

  const handleChange = (event) => {
    setCalorieLimit(event.target.value);
  };

  const paginatedRecipes = recipes.slice(
    (currentPage - 1) * recipesPerPage,
    currentPage * recipesPerPage
  );

  return (
    <>
      <article className='w-full bg-main-1 min-h-screen text-center justify-center font-baloo mb-5'>
        <h1 className='text-3xl mx-4 mt-4 py-2 mb-5 bg-main-3 text-white uppercase font-bold w-auto rounded-xl text-center'>
          Buscador de Recetas
        </h1>
        <div className='flex flex-col md:flex-row gap-2'>
          <div className='w-full md:w-1/4 text-center align-center items-center bg-button-2 rounded-xl'>
            <h2 className='text-white text-2xl uppercase font-bold bg-button-1 w-auto rounded-3xl my-4 mx-5 p-1'>
              Buscador
            </h2>
            <div className='text-center container flex flex-col m-auto p-4'>
              <label className='uppercase text-white bg-button-3 rounded-xl my-4 text-lg p-1'>
                Calorias (kcal)
              </label>
              <input
                className='bg-gray-200 rounded-md p-2 text-center'
                type='number'
                value={calorieLimit}
                onChange={handleChange}
              />
              <button
                onClick={handleSearch}
                disabled={isLoading}
                className='bg-button-1 rounded-xl py-2 px-4 my-5 text-text-sec'
              >
                Buscar
              </button>
            </div>
            <Pagination
              recipesPerPage={recipesPerPage}
              totalRecipes={recipes.length}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              isLoading={isLoading}
            />
          </div>
          <div className='w-full md:w-3/4 text-center align-center items-center bg-button-2 rounded-xl'>
            <h2 className='text-white text-2xl uppercase font-bold bg-button-1 w-auto rounded-3xl my-4 mx-5 p-1'>
              Resultados
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4'>
              {paginatedRecipes.map((recipe) => (
                <div key={recipe.id} className='col-span-1'>
                  <RecipeCard
                    recipe={recipe}
                    addToCollection={addToCollection}
                    OnRecipeClick={() => handleRecipeClick(recipe.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {selectedRecipe && (
          <RecipePopup recipe={recipeDetails} onClose={closeRecipePopup} fav = {false} />
        )}
      </article>
    </>
  );
}

export default CreadorRecetas;
