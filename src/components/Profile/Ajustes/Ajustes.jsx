import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import PasswordIcon from '../../../svg/PasswordIcon';
import { FaRegUserCircle } from 'react-icons/fa';
import AjustesUser from './AjustesUser.jsx/AjustesUser';
import { IoMdCloseCircle } from 'react-icons/io';
import AjustesPass from './AjustesPass/AjustesPass';

function Ajustes({ onClose }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isUser, setIsUser] = useState(false);
  const [isPass, setIsPass] = useState(false);

  return (
    <>
      {isOpen && (
        <article className='select-none font-baloo text-center'>
          <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col items-center justify-center transition-opacity duration-3000 opacity-100'>
            <div className='w-full md:w-2/3 lg:w-1/3 bg-main-3 rounded-3xl flex flex-col items-center'>
              <div className='w-full flex justify-end p-2'>
                <button onClick={onClose}>
                  <IoMdCloseCircle className='w-10 h-10 text-white hover:text-button-2 hover:scale-110 transition-transform duration-200' />
                </button>
              </div>
              <h1 className='text-white bg-main-2 rounded-xl p-1 mb-5 text-xl font-bold uppercase'>Ajustes</h1>
              <div>
                <button
                  onClick={() => setIsUser(true)}
                  className='bg-button-1 p-2 rounded-xl m-2 text-text-sec uppercase flex flex-row gap-3 items-center hover:scale-110 transition-transform duration-200'
                >
                  {' '}
                  Ajustes de usuario <FaRegUserCircle className='w-5 h-5' />{' '}
                </button>
              </div>
              <div>
                <button
                  onClick={() => setIsPass(true)}
                  className='bg-button-1 p-2 rounded-xl m-2 text-text-sec uppercase flex flex-row gap-3 items-center hover:scale-110 transition-transform duration-200'
                >
                  {' '}
                  Cambiar Contraseña <PasswordIcon className='w-5 h-5' />{' '}
                </button>
              </div>
            </div>
          </div>
          {isUser && <AjustesUser onClose={() => setIsUser(false)} />}
          {isPass && <AjustesPass onClose={() => setIsPass(false)} />}
        </article>
      )}
    </>
  );
}

export default Ajustes;
