import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import TrophyBase from '../../svg/logros/TrophyBase';
import LogroInfo from './LogroInfo/LogroInfo';
import Logros from '../../JSON/Logros.json';
import Ajustes from './Ajustes/Ajustes';

function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  return (
    <>
      <section className='bg-main-1 w-full min-h-screen font-baloo select-none'>
        <div className='flex flex-col lg:flex-row justify-between gap-4 align-center items-center h-full'>
          <div className='flex flex-col lg:w-1/2 bg-button-2 h-auto mt-4 ml-4 mr-4 items-center text-center rounded-3xl'>
            <div className='select-none rounded-full bg-main-2 p-5 mt-5'>
              <FaUser className='w-20 h-20' />
            </div>
            <div className='mt-3 mb-3 bg-main-2 p-2 rounded-3xl hover:underline underline-offset-2'>
              <h1 className='select-none text-3xl text-white font-extrabold hover:underline underline-offset-2 px-2'>
                USERNAME
              </h1>
            </div>
            <div className='mt-3 mb-3'>
              <button
                onClick={() => setSettingsOpen(true)}
                className='select-none bg-button-1 rounded-3xl text-white font-bold text-xl p-2 hover:scale-110 transition-transform duration-300 '
              >
                AJUSTES
              </button>
            </div>
            <div className='bg-main-2 rounded-xl w-full lg:w-2/3 m-2 mb-5 flex flex-col justify-center items-center '>
              <h2 className='select-none text-2xl font-bold text-white bg-button-2 w-fit rounded-md m-2  '>
                Objetivos
              </h2>
              <ul className='text-lg text-white list-outside list-disc '>
                <li className='hover:scale-110 hover:text-xl hover:text-bold select-none transition-transform duration-300 '>
                  1
                </li>
                <li className='hover:scale-110 hover:text-xl hover:text-bold select-none transition-transform duration-300 '>
                  2
                </li>
                <li className='hover:scale-110 hover:text-xl hover:text-bold select-none transition-transform duration-300 '>
                  3
                </li>
                <li className='hover:scale-110 hover:text-xl hover:text-bold select-none transition-transform duration-300 '>
                  4
                </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col lg:w-1/2 h-auto bg-main-2 mt-4 ml-4 mr-4 items-center text-center rounded-3xl '>
            <h1 className='font-bold uppercase text-3xl bg-main-1 rounded-xl w-fit p-2 m-2 '>
              Logros
            </h1>
            <div className='bg-main-1 rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 grid-flow-row gap-12 m-2 px-5 py-10 align-center items-center '>
              {Logros.map((item, i) => (
                <div
                  key={i}
                  className='relative bg-main-2 rounded-full w-full mx-5 hover:scale-110 transition-transform duration-200 hover:underline'
                >
                  <button
                    onClick={() => setIsOpen(true)}
                    onMouseEnter={() => setTitle(item.titulo) & setDesc(item.descripcion)}
                    className=''
                  >
                    <TrophyBase />
                  </button>
                  <h2 className='absolute text-text-sec uppercase font-semibold italic '>{item.titulo}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
        {isOpen && (
          <LogroInfo onClose={() => setIsOpen(false)} NameLogo={title} Icon={<TrophyBase />} Desc={desc} />
        )}
        {settingsOpen && <Ajustes onClose={() => setSettingsOpen(false)} />}
      </section>
    </>
  );
}

export default Profile;
