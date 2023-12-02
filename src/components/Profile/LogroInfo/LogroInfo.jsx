import React, { useState } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import Logros from '../../../JSON/Logros.json';
import { FaFacebook, FaInstagram, FaSquareXTwitter } from 'react-icons/fa6';

function LogroInfo({ onClose, NameLogo, Icon, Desc }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <article className='select-none font-baloo fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col items-center justify-center transition-opacity duration-300 opacity-100'>
          <div className='w-full sm:w-1/2 md:w-2/3 lg:w-1/3 bg-main-3 rounded-3xl flex flex-col items-center'>
            <div className='w-full flex justify-end p-2'>
              <button onClick={onClose}>
                <IoMdCloseCircle className='w-10 h-10 text-white hover:text-button-2 hover:scale-110 transition-transform duration-200' />
              </button>
            </div>
            <div className='flex flex-col items-center'>
              <h1 className='text-white font-bold text-2xl uppercase bg-button-2 rounded-xl p-1 mb-4'>{NameLogo}</h1>
              <div className='m-2 mb-5'>{Icon}</div>
              <div className='w-full md:w-1/2 bg-button-2 rounded-xl text-wrap h-auto pb-2 mb-10'>
                <h2 className='text-2xl uppercase font-bold text-text-sec'>Descripcion</h2>
                <p className='text-lg italic p-2'>{Desc}</p>
              </div>
              {/* <div className='bg-button-2 rounded-xl p-1 mb-5'>
                <h2 className='text-lg font-semibold text-text-sec'>COMPARTIR</h2>
              </div> */}
              {/* <div className='flex flex-col md:flex-row gap-5 bg-button-2 rounded-xl pt-5 px-5 mb-5'>
                <div>
                  <button className='hover:scale-150 transition-transform duration-200'>
                    <FaFacebook className='w-10 h-10 mb-5 text-[#4267B2]' />
                  </button>
                </div>
                <div>
                  <button className='hover:scale-150 transition-transform duration-200'>
                    <FaInstagram className='w-10 h-10 mb-5 text-[#C13584]' />
                  </button>
                </div>
                <div>
                  <button className='hover:scale-150 transition-transform duration-200'>
                    <FaSquareXTwitter className='w-10 h-10 mb-5' />
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </article>
      )}
    </>
  );
}

export default LogroInfo;
