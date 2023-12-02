import React, { useState } from 'react';

const ShoppingList = () => {
  const [ingredients, setIngredients] = useState([
    { id: 1, name: 'Leche', checked: false },
    { id: 2, name: 'Pan', checked: false },
    { id: 3, name: 'Huevos', checked: false },
    // Puedes agregar más ingredientes según tus necesidades
  ]);

  const handleToggleCheckbox = (id) => {
    const updatedIngredients = ingredients.map((ingredient) =>
      ingredient.id === id
        ? { ...ingredient, checked: !ingredient.checked }
        : ingredient
    );
    setIngredients(updatedIngredients);
  };

  return (
    <div className="max-w-md mx-auto p-4 flex flex-col h-screen">
      <div className='bg-main-2 rounded-xl mb-5'>
          <h2 className="text-3xl font-bold mb-4 uppercase text-center text-white">Lista de Compras</h2>
      </div>
      <div className='w-full bg-button-2 p-2 flex-grow rounded-3xl'>
        <ul className="list-inside">
          {ingredients.map((ingredient) => (
            <li key={ingredient.id} className="text-2xl font-baloo uppercase font-bold text-main-3 mb-2">
              <input
                type="checkbox"
                id={`ingredient-${ingredient.id}`}
                checked={ingredient.checked}
                onChange={() => handleToggleCheckbox(ingredient.id)}
                className="mr-2 rounded-full hover:scale-125 transition-transform hover:bg-button-1 duration-300 "
              />
              <label htmlFor={`ingredient-${ingredient.id}`}>{ingredient.name}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingList;
