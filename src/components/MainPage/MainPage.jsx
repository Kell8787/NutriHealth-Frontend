import React, { useEffect, useState } from 'react';
import frasesJson from '../../JSON/Frases.json';
import Login from './Login/Login';
import { Link } from 'react-router-dom';

function MainPage() {
  const frases = frasesJson.frases || [];
  const obtenerFraseAleatoria = () => {
    if (frases.length === 0) {
      return 'No hay frases disponibles';
    }

    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    return frases[indiceAleatorio];
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className='font-baloo select-none'>
        <div className='w-full min-h-screen flex flex-col items-center'>
          <div className='flex bg-main-3 w-full md:w-1/2 h-14 justify-center p-6 aling-center rounded-lg shadow-md shadow-slate-400 text-white text-2xl font-bold italic mt-10 mb-5 items-center aling-center pt-2 pb-2 '>
            <p className='text-center'>"{obtenerFraseAleatoria()}"</p>
          </div>
          <div className='flex flex-col bg-main-3 text-white aling-center justify-center items-center w-full md:w-1/2 rounded-xl shadow-2xl'>
            <h1 className='text-4xl md:text-5xl uppercase text-center pb-4 pt-4 font-extrabold'>Sobre Nosotros</h1>
            <div className='bg-main-2 h-auto w-full md:w-4/5 rounded-lg font-bold mb-10 hover:scale-110 transition-trasnform duration-300'>
              <p className='p-2 text-center'>
                ¡Bienvenido a NutriHealth! Somos una aplicación web diseñada para hacer que tu viaje hacia una vida más saludable sea más fácil y motivador. Con NutriHealth, puedes registrar tus comidas, establecer metas personalizadas y celebrar tus logros con una comunidad dedicada que comparte tus objetivos. Únete a nosotros para descubrir una nueva forma de abordar tu bienestar, donde la salud y la motivación van de la mano. ¡NutriHealth está aquí para guiarte en cada paso de tu camino hacia un estilo de vida más saludable y equilibrado!
              </p>
            </div>
          </div>
          <div className='text-white uppercase font-bold flex'>
            <button onClick={() => setIsOpen(true)} className='uppercase p-2 bg-button-1 m-4 text-2xl md:text-3xl rounded-xl hover:scale-110 transition-transform duration-300 hover:bg-button-2'>
              Iniciar Sesión
            </button>
            {isOpen && <Login onClose={() => setIsOpen(false)} />}
            <Link to='/register'>
              <button className='uppercase p-2 bg-button-1 m-4 text-2xl md:text-3xl rounded-xl hover:scale-110 hover:text-slate transition-transform duration-300 hover:bg-button-2'>
                Registrarse
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainPage;