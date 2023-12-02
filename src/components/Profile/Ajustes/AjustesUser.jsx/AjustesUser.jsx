import React, { useState } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import ProfileIcon from '../../../../svg/ProfileIcon';

function AjustesUser({ onClose }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <article>
          <div className='font-baloo fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col aling-center justify-center items-center transition-opacity duration-3000 opacity-100  '>
            <div className='w-full md:w-2/3 lg:w-1/3 bg-main-3 rounded-3xl h-fit flex flex-col items-center'>
              <div className='w-full flex justify-end p-2'>
                <button onClick={onClose}>
                  <IoMdCloseCircle className='w-10 h-10 text-white hover:text-button-2 hover:scale-110 transition-transform duration-200' />
                </button>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-xl font-semibold text-white bg-main-2 rounded-xl p-1 mb-3 '>Ajustes de Usuario</h1>
                <div>
                  <form>
                    <div className='w-200px h-20 mb-10'>
                      {/* aquí estará la foto del usuario */}
                      <ProfileIcon />
                    </div>
                    <button className='bg-button-1 rounded-xl p-1 mb-5'>Cambiar Foto</button>
                  </form>
                </div>
                <div>
                  <h2 className='uppercase font-semibold text-white bg-main-2 rounded-xl p-1 mb-5 text-center'>Cambiar Usuario</h2>
                  <form className='m-2 flex flex-col text-center'>
                    <label className='text-white mb-2'>Nuevo Usuario </label>
                    <input className='bg-textbox-color rounded-xl text-text-sec text-center mb-2' />
                    <button className='bg-button-1 rounded-xl uppercase font-semibold text-white '>Enviar</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </article>
      )}
    </>
  );
}

export default AjustesUser;
