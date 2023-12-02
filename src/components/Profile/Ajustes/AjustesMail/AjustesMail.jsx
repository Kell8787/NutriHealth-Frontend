import React, { useState } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

function AjustesMail({ onClose }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <article>
          <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col aling-center justify-center items-center transition-opacity duration-3000 opacity-100  '>
            <div className='w-full md:w-2/3 lg:w-1/3 bg-main-3 rounded-3xl h-fit flex flex-col items-center'>
              <div className='w-full flex justify-end p-2'>
                <button onClick={onClose}>
                  <IoMdCloseCircle className='w-10 h-10' />
                </button>
              </div>
              <div className='w-full p-4'>
                {/* Aquí puedes agregar el contenido del ajuste de correo */}
                <h1 className='text-3xl font-bold mb-4 text-white uppercase'>Ajustes de Correo</h1>
                {/* Agrega el contenido del ajuste de correo aquí */}
              </div>
            </div>
          </div>
        </article>
      )}
    </>
  );
}

export default AjustesMail;
