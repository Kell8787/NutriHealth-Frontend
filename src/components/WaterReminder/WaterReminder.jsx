import React, { useState, useEffect } from 'react';
import IconWater from '../../svg/IconWater';

function WaterReminder() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Establecer un retraso de 3 segundos antes de abrir el recordatorio de agua
    const timeoutId = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    // Limpiar el temporizador cuando el componente se desmonta
    return () => clearTimeout(timeoutId);
  }, []); // El array vacío asegura que este efecto solo se ejecute una vez al montar el componente

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col aling-center justify-center items-center transition-opacity duration-3000 opacity-100">
          <div
            onClick={() => setIsOpen(false)}
            className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 font-baloo bg-main-3 p-5 rounded-xl flex flex-col lg:flex-row justify-center items-center gap-5"
          >
            <div className="w-full md:w-1/2 m-auto p-2 hover:scale-110 transition-transform duration-500">
              <IconWater />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="font-extrabold uppercase text-white text-2xl md:text-4xl lg:text-5xl rounded-2xl p-2 bg-main-2 text-center">
                RECUERDA TOMAR AGUA
              </h1>
              <p className="text-center text-sm md:text-base text-text-sec italic">
                haz clic para salir
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WaterReminder;
