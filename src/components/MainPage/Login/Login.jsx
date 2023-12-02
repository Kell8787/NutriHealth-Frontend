import React, { useState, useEffect } from 'react';
import UserIcon from '../../../svg/UserIcon';
import PasswordIcon from '../../../svg/PasswordIcon';
import IconFacebook from '../../../svg/IconFacebook';
import IconGoogleCircle from '../../../svg/IconGoogleCircle';
import { IoMdCloseCircle } from 'react-icons/io';
import Icon from '../../../svg/Icon';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {saveAuthToken} from './TokenKey/TokenKey';



function Login({ onClose }) {
  const [isOpen, setIsOpen] = useState(true);
  const [username, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3500/api/auth/login', { username, password });

      const { token } = response.data;
      saveAuthToken(token);
      
      // Redirigir al usuario a otra página después del login exitoso
     
    } catch (error) {
      console.error('Error en el login:', error);
    }
  };
  return (
    <>
      {isOpen && (
        <article className='font-baloo flex flex-col aling-center items-center text-center justify-center m-3'>
          <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col aling-center justify-center items-center transition-opacity duration-3000 opacity-100 '>
            <div className='w-full md:w-2/3 lg:w-1/2 xl:w-1/3 bg-main-3 rounded-3xl h-fit flex flex-col items-center'>
              <div className='w-full flex justify-end p-2'>
                <button onClick={onClose}>
                  <IoMdCloseCircle className='w-10 h-10' />
                </button>
              </div>
              <div className='w-full text-center bg-main-1 rounded-xl m-2 p-3'>
                <h2 className='font-extrabold text-text-sec text-2xl uppercase p-2'>
                  Iniciar Sesión
                </h2>
              </div>
              <div className='flex m-2'>
                <p className='text-text-sec px-1'>Es tu primera vez? </p>
                <Link to ="/register">
                  <a href='/' className='text-white font-bold italic underline px-1'>
                    Regístrate
                  </a>
                </Link>
              </div>
              <div className='bg-main-1 rounded-3xl mb-10 p-5'>
                <form action='/Login' name='Login' className='flex flex-col'>
                  <div className='flex flex-col'>
                    <label htmlFor='username' className='text-text-sec'>Nombre de Usuario</label>
                    <div className='flex flex-row content-bottom'>
                      <input
                        type='text'
                        id='username'
                        name='username'
                        value={username}
                        onChange={(e)=>setIdentifier(e.target.value)}
                        className='rounded-2xl mx-2 px-2 my-3 bg-textbox-color focus:outline-none focus:ring focus:border-button-1'
                      />
                      <UserIcon className='w-8 h-8 text-main-3 mt-2' />
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="password"
                    
                     className='text-text-sec'>Contraseña</label>
                    <div className='flex flex-row content-bottom'>
                      <input
                        type='password'
                        id='password'
                        name='password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className='rounded-2xl mx-2 px-2 my-3 bg-textbox-color focus:outline-none focus:ring focus:border-button-1'
                      />
                      <PasswordIcon className='w-7 h-7 text-main-3 mt-2' />
                    </div>
                  </div>
                  {/* <a href='/' className='text-text-sec underline'>
                    Olvidaste tu contraseña?
                  </a> */}
                  
                      <button
                        onClick={handleLogin}
                        className='w-auto h-auto bg-button-1 p-2 m-3 rounded-3xl hover:scale-110 hover:font-bold transition-transform duration-300 text-text-sec'
                      >
                        Iniciar Sesión
                      </button>
                  
                </form>
                {/* <div className='w-full bg-main-2 rounded-3xl'>
                  <h2 className='text-text-sec p-2 italic text-lg'>
                    Inicia sesión con:{' '}
                  </h2>
                  <div className='flex flex-row aling-center items-center justify-center'>
                    <IconFacebook className='w-10 h-10 text-text-sec m-1 hover:scale-125 hover:font-bold transition-transform duration-300' />
                    <button>
                      <IconGoogleCircle className='w-12 h-12 text-text-sec m-1 hover:scale-125 hover:font-bold transition-transform duration-300' />
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </article>
      )}
    </>
  );
}

export default Login;
