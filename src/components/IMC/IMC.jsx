import React, { useState } from 'react';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';

function IMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultadoIMC, setResultadoIMC] = useState(null);
  const [mensajeIMC, setMensajeIMC] = useState('');

  const calcularIMC = () => {
    if (peso && altura) {
      const imc = (peso / (altura * altura)).toFixed(2);
      setResultadoIMC(imc);

      if (imc < 18.5) {
        setMensajeIMC('Bajo peso');
      } else if (imc >= 18.5 && imc < 24.9) {
        setMensajeIMC('Peso normal');
      } else if (imc >= 25 && imc < 29.9) {
        setMensajeIMC('Sobrepeso');
      } else {
        setMensajeIMC('Obesidad');
      }
    }
  };

  return (
    <>
      <article className='w-full min-h-screen flex flex-col items-center font-baloo my-10'>
        <div className='bg-main-3 p-5 w-full md:w-5/6 lg:w-4/5 xl:w-3/4 rounded-3xl'>
          <div className='w-full md:flex md:flex-row'>
            <div className='flex flex-col w-full md:w-1/2 p-2 items-center justify-center align-center'>
              <form className='flex flex-col items-center'>
                <label className='text-2xl text-center uppercase text-white font-bold mb-2'>
                  Peso (kg):
                </label>
                <input
                  type='number'
                  value={peso}
                  onChange={(e) => setPeso(e.target.value)}
                  className='bg-textbox-color w-full md:w-1/2 h-7 rounded-xl text-center mb-4'
                />
                <label className='text-2xl text-center uppercase text-white font-bold mb-2'>
                  Altura (m):
                </label>
                <input
                  type='number'
                  value={altura}
                  onChange={(e) => setAltura(e.target.value)}
                  className='bg-textbox-color w-full md:w-1/2 h-7 rounded-xl text-center mb-4'
                />
              </form>
              <button
                onClick={calcularIMC}
                className='bg-button-1 m-3 font-bold text-white rounded-xl p-2 hover:scale-125 transition-transform duration-300 hover:font-extrabold'
              >
                Calcular
              </button>
            </div>
            <div className='w-full md:w-1/2 mt-5 md:mt-0'>
              <div className='bg-main-1 flex flex-col items-center justify-center align-center rounded-2xl p-2 w-full md:w-fit'>
                <h2 className='text-4xl text-center my-2 bg-main-3 w-fit rounded-xl p-2'>
                  ¿Qué es el IMC?
                </h2>
                <p className='text-lg text-center p-2  mx-2 my-2 bg-main-3 rounded-2xl'>
                  El índice de masa corporal (IMC) es una medida que se utiliza
                  para evaluar si una persona tiene un peso saludable en
                  relación con su altura. El resultado del cálculo se compara
                  con rangos establecidos y se clasifica en categorías como bajo
                  peso, peso normal, sobrepeso u obesidad.
                </p>
              </div>
              <div className='m-5 md:m-10 flex flex-col text-center items-center bg-main-1 text-white rounded-3xl'>
                <label className='text-3xl font-extrabold underline'>IMC</label>
                {resultadoIMC !== null && (
                  <>
                    <h2 className='font-bold text-2xl'>Tu IMC es: {resultadoIMC}</h2>
                    <p className='text-lg'>
                      {mensajeIMC ? `Estado: ${mensajeIMC}` : ''}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default IMC;
