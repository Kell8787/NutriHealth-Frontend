import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DietaCard from './DietaCard/DietaCard';
import {getAuthToken} from '../../MainPage/Login/TokenKey/TokenKey';

const BASE_URL = `${import.meta.env.VITE_API_URL}`; 

const Dietas = () => {
  const [recetasIds, setRecetasIds] = useState([]);
  const [dietasNombres, setDietasNombres] = useState([]);
  const authToken = getAuthToken(); // Obtén el token de autenticación

  useEffect(() => {
    const fetchDietasNombres = async () => {
      try {
        const response = await axios.get(`${BASE_URL}:3500/api/recetas/dietas/nombres`, {
          headers: {
              Authorization: `Bearer ${authToken}`,
          },
      });
        setDietasNombres(response.data);
      } catch (error) {
        console.error('Error al obtener nombres de dietas:', error);
      }
    };

    fetchDietasNombres();
  }, []);

  const handleVerDietasClick = async (dietaNombre) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/recetas/collection/${dietaNombre}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.data.recetas && Array.isArray(response.data.recetas)) {
        const recetasIds = response.data.recetas.map((receta) => receta._id);
        setRecetasIds(recetasIds);
        console.log(recetasIds);
      } else {
        console.error('No se encontraron recetas en la respuesta:', response.data);
      }
    } catch (error) {
      console.error('Error al obtener recetas de la dieta:', error);
    }
  };

  const handleEliminarDieta = async (dietaNombre) => {
    try {
      console.log(dietaNombre);
      await axios.delete(`${BASE_URL}/api/recetas/dietas/${dietaNombre}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log(`Dieta ${dietaNombre} eliminada exitosamente.`);
      // Actualizar la lista de dietas después de eliminar
      setDietasNombres((prevDietas) => prevDietas.filter((nombre) => nombre !== dietaNombre));
      window.location.reload();
    } catch (error) {
      console.error(`Error al eliminar la dieta ${dietaNombre}:`, error);
    }
  };


  return (
    <div className="container mx-auto p-4 h-screen ">
      <h1 className="text-4xl font-bold mb-4 text-center text-white uppercase">Ver Dietas</h1>
      <div className='flex justify-center items-center flex-wrap'>

        {/* Crea botones para cada nombre de dieta */}
        {dietasNombres.map((dietaNombre) => (
          <div>
            <button
              key={dietaNombre}
              onClick={() => handleVerDietasClick(dietaNombre)}
              className="bg-button-1 text-white py-2 px-4 rounded mr-2 mb-2 uppercase"
            >
              {dietaNombre}
            </button>
                      {/* Botón de eliminar para cada dieta */}
          <button
            onClick={() => handleEliminarDieta(dietaNombre)}
            className="bg-red-500 text-white py-2 px-4 rounded mr-2 mb-2 uppercase"
          >
            Eliminar {dietaNombre}
          </button>
          </div>
        ))}
      </div>

      {/* Renderiza DietaCard con los ids de las recetas */}
      {recetasIds.length > 0 && (
        <DietaCard recetasIds={recetasIds} />
      )}
    </div>
  );
};

export default Dietas;
