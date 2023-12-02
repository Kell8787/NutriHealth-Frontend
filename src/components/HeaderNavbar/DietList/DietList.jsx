import React from 'react'
import list from "../../../JSON/list.json"
import { Link } from 'react-router-dom'

function DietList(close) {
    return (
        <div className=' bg-main-2 text-white absolute top-20 flex flex-col items-start rounded-lg p-2 w-44 gap-4'>
        
         <>
            <ul className='font-medium  text-center'>
                <Link to="/creator">
                    <li className='my-2 hover:font-bold transition-transform duration-200'>
                        <button onClick={close}>Creador de recetas</button>
                    </li>
                </Link>
                <Link to="/collection">
                    <li className='my-2 hover:font-bold transition-transform duration-200'>
                        <button onClick={close} >Coleccion</button>
                    </li>
                </Link>
                <Link to="/shoppinglist">
                    <li className='my-2 hover:font-bold transition-transform duration-200'>
                        <button onClick={close} >Lista de Compra</button>
                    </li>
                </Link>
                <Link to="/dietas">
                    <li className='my-2 hover:font-bold transition-transform duration-200'>
                        <button onClick={close} >Dietas</button>
                    </li>
                </Link>
            </ul>
         </>
        
    </div>
    )
}

export default DietList
