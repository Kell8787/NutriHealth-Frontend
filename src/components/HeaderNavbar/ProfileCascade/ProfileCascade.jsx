import React from 'react'
import ProfileList from "../../../JSON/ProfileList"
import { Link } from 'react-router-dom'
import { removeAuthToken } from '../../MainPage/Login/TokenKey/TokenKey'
function ProfileCascade(close) {
    return (
        <>
        <div className=' bg-main-2 text-white absolute -right-12 w-100 flex flex-col items-center rounded-lg p-3  gap-4 '>

            <ul className=' text-center  '>
                    <li className='my-5'>
                    <Link to = "/profile"><button onClick={close} className={`rounded-xl w-max p-1 text-center bg-main-3 hover:underline font-medium hover:font-bold transition-transform duration-3000` }>Perfil</button></Link>
                    </li>
                    <li className='my-5'>
                        <button onClick={removeAuthToken} className={`rounded-xl w-max p-1 text-center bg-button-1 hover:underline font-medium hover:font-bold transition-transform duration-3000` }>Cerrar Sesion</button>
                    </li>
                </ul>
    </div>
        </>
    )
}

export default ProfileCascade
