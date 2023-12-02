import React, {useState} from 'react';
import axios from 'axios';
import IconFacebook from '../../svg/IconFacebook';
import IconInstagram from '../../svg/IconInstagram';
import IconGoogleCircle from '../../svg/IconGoogleCircle';

const BASE_URL = `${import.meta.env.VITE_API_URL}/api/`; 

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRegister = async () => {
    try {
      // Registro de usuario
      await axios.post(`${BASE_URL}/api/auth/register`, { username, email, password });
      console.log('Registro exitoso!');
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };
  return (
    <>
      <section className='w-full h-screen flex-nowrap flex flex-col items-center font-baloo'>
        <div className='mt-5 text-center bg-main-3 w-fit p-3 h-auto rounded-2xl text-2xl font-bold uppercase'>
          <h2 className='w-auto text-white'>BIENVENIDO!</h2>
        </div>
        <div className='mx-2 px-5 flex justify-center aling-center items-center gap-4 w-full md:w-5/6 text-center bg-main-3 mt-5 rounded-xl p-5 text-xl font-bold'>
          <div className='w-full md:w-1/2'>
            <form action='Register' className='flex flex-col justify-center items-center '>
              <label htmlFor='username' className='text-white w-max'>
                Usuario
              </label>
              <input
                type='text'
                id='username'
                name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='w-full md:w-max px-2 rounded-lg bg-textbox-color'
              />
              <label htmlFor='email' className='text-white w-max'>
                Correo Electrónico
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full md:w-max px-2 rounded-lg bg-textbox-color'
              />
              <label htmlFor='password' 
              className='text-white w-max'>
                Contraseña
              </label>
              <input
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full md:w-max px-2 rounded-lg bg-textbox-color'
              />
          
              
            </form>
          </div>
          {/* <div className='w-full md:w-1/2'>
            <p className='w-max text-white text-center'>Puedes registrarte con: </p>
            <div className='flex gap-5 justify-center w-full mt-10 '>
              <button>
                <IconFacebook className='w-10 h-10 text-white hover:scale-150 transition-trasnform duration-300' />
              </button>
              <button>
                <IconInstagram className='w-10 h-10 text-white hover:scale-150 transition-trasnform duration-300' />
              </button>
              <button>
                <IconGoogleCircle className='w-20 h-20 text-white hover:scale-150 transition-trasnform duration-300' />
              </button>
            </div>
          </div> */}
        </div>
        <button className='text-2xl bg-button-1 text-white my-5 rounded-2xl p-2 hover:scale-125 hover:font-bold transition-trasnform duration-300' onClick={handleRegister}>
          Registrar
        </button>
      </section>
    </>
  );
}

export default Register;
