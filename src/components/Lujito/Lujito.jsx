import React from 'react';
import { RiCellphoneFill } from 'react-icons/ri';
import { FaClock } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import ImagenPicnic from '../../images/picnic-steakhouse.jpg';

function Lujito() {
  return (
    <>
      <article className='w-full min-h-screen flex flex-col items-center m-5'>
        <div className='w-full h-auto bg-main-3 rounded-xl my-5'>
          <div className='text-center md:text-left md:flex'>
            <div className='w-full md:w-1/2 mx-5 my-5 text-center md:text-lg lg:text-xl'>
              <h1 className='font-bold uppercase text-white text-3xl m-3'>
                Nombre: <br />
                <a
                  href='https://www.instagram.com/picnicsteakhouse/?hl=es'
                  className='text-main-2 hover:underline'
                >
                  Picnic SteakHouse
                </a>
              </h1>
              <ul className='text-white flex flex-col items-center md:items-start'>
                <li className='flex gap-1'>
                  <RiCellphoneFill /> Teléfono: 25504888
                </li>
                <li className='flex gap-1'>
                  <FaClock /> Horario: 10:30am - 10:00pm
                </li>
                <li className='flex gap-1'>
                  <FaClock /> Fin de semana: 7:00 am - 10:00pm
                </li>
                <li className='flex gap-1'>
                  <IoLocationSharp /> Dirección: Calle al volcán km 16, Santa Tecla
                </li>
              </ul>
              <div className='bg-main-2 p-3 my-5 rounded-xl'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15504.577972376544!2d-89.2819913!3d13.7096972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f632f9c2762a4af%3A0x5f52e8f83ab3693f!2sPicnic%20Steak%20House!5e0!3m2!1ses!2ssv!4v1701274293017!5m2!1ses!2ssv'
                  className='w-full h-60 md:h-80 rounded-xl'
                  title='Google Maps'
                  loading='lazy'
                ></iframe>
              </div>
            </div>
            <div className='w-full md:w-1/2 flex flex-col items-center mx-5 '>
              <div className='my-5'>
                <img
                  src={ImagenPicnic}
                  className='w-full h-auto rounded-3xl p-2'
                  alt='Picnic SteakHouse'
                />
              </div>
              <div className='my-5 w-full bg-button-2 rounded-2xl flex justify-around p-5 '>
                <button className='mx-2 w-10 h-10 hover:scale-110 transition-transform duration-200'>
                  <a href='https://www.facebook.com/picnicsteakhouse/'>
                    <FaFacebook className='text-[#1877F2] w-10 h-10' />
                  </a>
                </button>
                <button className='text-[#E4405F] mx-2 w-10 h-10 hover:scale-110 transition-transform duration-200'>
                  <a href='https://www.instagram.com/picnicsteakhouse/?hl=es'>
                    <FaInstagram className='w-10 h-10' />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default Lujito;
