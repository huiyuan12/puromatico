import React from 'react'

function Table() {
  return (
    <div className='md:flex justify-center '>
        <div>
            <h4 className='bg-blue-600 text-white font-bold py-2'>Ventajas</h4>
            <ul className='bg-green-200 text-left py-5 px-2'>
           <li> <p>Conveniencia en la limpieza diaria</p></li>
            <li><p>Ahorro de tiempo y esfuerzo</p></li>
            <li><p>Programación personalizada</p></li>
            <li><p>Limpieza constante</p></li>
            <li><p>Economía de energía</p></li>
            <li><p>Funciones adicionales como trapear y conectividad Wi-Fi</p></li>
            </ul>
        </div>
        <div className='bg-slate-100 ' >
            <h4 className='bg-blue-600 text-slate-100 font-bold py-2'>Desventajas</h4>
           <ul className='text-left py-5 px-2'>
           <li>
           <p>
            Dependencia de la batería y recarga necesaria
            </p>
           </li>
           <li>
           <p>
            Necesidad de mantenimiento periódico
            </p>
           </li>
            <li>
            <p>
            Algunos modelos pueden ser ruidosos
            </p>
            </li>
           </ul>
        </div>
    </div>
    
  )
}

export default Table