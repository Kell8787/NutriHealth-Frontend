import React, { useState } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

function AjustesPass({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <article>
          <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col aling-center justify-center items-center transition-opacity duration-3000 opacity-100  '>
            <div className='w-full md:w-2/3 lg:w-1/3 bg-main-3 rounded-3xl h-fit flex flex-col items-center'>
              <div className='w-full flex justify-end p-2 text-white '>
                <button onClick={onClose}>
                  <IoMdCloseCircle className='w-10 h-10 hover:text-button-2 hover:scale-110 transition-transform duration-200 ' />
                </button>
              </div>
              <form action=''>
                <div className='flex flex-col '>
                  <div className='flex jsutify-around items-center space-x-2 my-5 '>
                    <label className='w-full text-center text-white transition-transform durantion-200 font-semibold'>
                      Antigua Contraseña
                    </label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Antigua Contraseña'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className='border p- rounded-xl bg-textbox-color text-center'
                    />
                    <button
                      type='button'
                      onClick={togglePasswordVisibility}
                      className='px-3 py-  text-text-sec bg-button-2 rounded-xl uppercase italic text-md hover:font-bold hover:scale-110 hover:text-white transition-transform durantion-200'
                    >
                      {showPassword ? 'Ocultar' : 'Mostrar'}
                    </button>
                  </div>
                  <div className='flex items-center space-x-2 my-5'>
                    <label className='w-full text-center text-white transition-transform durantion-200 font-semibold'>
                      Nueva Contraseña
                    </label>
                    <input
                      type={showNewPassword ? 'text' : 'password'}
                      placeholder='Nueva Contraseña'
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className='border p- rounded-xl bg-textbox-color text-center'
                    />
                    <button
                      type='button'
                      onClick={toggleNewPasswordVisibility}
                      className='px-3 py-  text-text-sec bg-button-2 rounded-xl uppercase italic text-md hover:font-bold hover:scale-110 hover:text-white transition-transform durantion-200'
                    >
                      {showNewPassword ? 'Ocultar' : 'Mostrar'}
                    </button>
                  </div>
                  <div className='flex items-center space-x-2 my-5'>
                    <label className='w-full text-center text-white transition-transform durantion-200 font-semibold'>
                      Confirma Nueva Contraseña
                    </label>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder=' Confirma Contraseña'
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className='border p- rounded-xl bg-textbox-color text-center '
                    />
                    <button
                      type='button'
                      onClick={toggleConfirmPasswordVisibility}
                      className='px-3 py-  text-text-sec bg-button-2 rounded-xl uppercase italic text-md hover:font-bold hover:scale-110 hover:text-white transition-transform durantion-200'
                    >
                      {showConfirmPassword ? 'Ocultar' : 'Mostrar'}
                    </button>
                  </div>
                  <button className='bg-button-1 text-text-sec rounded-xl p-1 mb-5 hover:font-bold hover:scale-110 hover:text-white transition-transform durantion-200 '>
                    ENVIAR
                  </button>
                </div>
              </form>
            </div>
          </div>
        </article>
      )}
    </>
  );
}

export default AjustesPass;
