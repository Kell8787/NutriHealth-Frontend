import React, { useState, useEffect } from 'react';
import Icon from '../../svg/Icon';
import ProfileIcon from '../../svg/ProfileIcon';
import { Link } from 'react-router-dom';
import DietList from './DietList/DietList';
import ProfileCascade from './ProfileCascade/ProfileCascade';

function HeaderNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 767;

  return (
    <>
      <header className='font-baloo w-full'>
        <div className='bg-main-2 lg:flex rounded-b-lg justify-center'>
          <div>
            <Link to="/">
              <button className='hover:scale-105 pl-3 transition-transform duration-300'>
                <Icon className='' />
              </button>
            </Link>
          </div>
          <div className='uppercase list-none list-inside w-full'>
            <ul className='lg:my-5 sm:mx-auto space-x-4 lg:text-2xl md:text-xl sm:text-lg font-bold text-main-3 flex justify-around'>
              <Link to="/">
                <li>
                  <button className='lg:w-44 lg:h-20 sm:w-20 sm:h-10 md:w-32 md:h-15 rounded-3xl bg-main-1 hover:scale-110 hover:bg-main-hover hover:text-white transition-transform duration-300 mb-2'>INICIO</button>
                </li>
              </Link>
              <li className='relative' onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                <button className='lg:w-44 lg:h-20 sm:w-20 sm:h-10 md:w-32 md:h-15 rounded-3xl bg-main-1 hover:scale-110 hover:bg-main-hover hover:text-white transition-transform duration-300 mb-2'>
                  DIETA
                </button>
                {isOpen && (
                  <DietList close={() => setIsOpen(false)} />
                )}
              </li>
              <Link to="/imc">
                <li>
                  <button className='lg:w-44 lg:h-20 sm:w-20 sm:h-10 md:w-32 md:h-15 rounded-3xl bg-main-1 hover:scale-110 hover:bg-main-hover hover:text-white transition-transform duration-300 mb-2'>IMC</button>
                </li>
              </Link>
              <li>
                <Link to="/lujito">
                  <button className='lg:w-44 lg:h-20 sm:w-20 sm:h-10 md:w-32 md:h-15 rounded-3xl bg-main-1 hover:scale-110 hover:bg-main-hover hover:text-white transition-transform duration-300 mb-2'>LUJITO</button>
                </Link>
              </li>
              <li className='relative' onMouseEnter={() => setProfileOpen(true)} onMouseLeave={() => setProfileOpen(false)}>
                <button className='w-[40px] md:w-[60px] hover:scale-110 hover:text-white transition-transform duration-300 mb-2 rounded-full'>
                  <ProfileIcon />
                </button>
                {profileOpen && (
                  <ProfileCascade close={() => setProfileOpen(false)} />
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderNavbar;
