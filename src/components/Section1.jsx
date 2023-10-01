import React from 'react'
import Table from './Table'

function Section1() {
  return (
    <section className='pt-10  bg-slate-200 py-10'>
    <div className='container mx-auto text-center px-5'>
    <h2 className=' text-4xl font-bold'>
    ¿Qué es un Robot Aspirador?
    </h2>
    <p className='mt-10'>
    Un aspirador robot automático es un dispositivo de limpieza diseñado para aspirar y limpiar pisos de manera automática y autónoma. Estos robots son una parte de la categoría de dispositivos de limpieza inteligentes y están diseñados para simplificar y automatizar la tarea de aspirar y barrer el suelo en hogares y oficinas.
    </p>
    <h3 className='mt-10 text-4xl font-bold'>Características </h3>
      <ul className='text-left mt-5'>
        <li>
        <span className='font-bold'>Sensores:</span> Están equipados con sensores que les permiten detectar obstáculos y cambios en la superficie, lo que les permite evitar colisiones y caídas.
        </li>
        <li>
        <span className='font-bold'>Navegación: </span> Utilizan algoritmos de navegación para moverse de manera eficiente por la habitación, a menudo siguiendo patrones de limpieza preestablecidos, como espirales o patrones en zigzag. </li>
        <li>
        <span className='font-bold'>Programación: </span> Muchos modelos permiten a los usuarios programar horarios de limpieza para que el robot limpie de manera automática en momentos específicos del día o de la semana.
        </li>
        <li>
        <span className='font-bold'>Recarga automática: </span> Cuando la batería del robot está baja, regresará automáticamente a su estación de carga para recargarse antes de continuar la limpieza.
        </li>
        <li>
        <p>
        <span className='font-bold'>Control remoto y aplicaciones: </span>  Algunos modelos ofrecen control remoto a través de aplicaciones móviles, lo que permite a los usuarios iniciar, detener o programar la limpieza desde sus dispositivos móviles.
        </p>
        </li>
        <li>
        <p> <span className='font-bold'>Filtros y depósitos: </span>
          Los robot aspiradores suelen estar equipados con filtros para atrapar partículas de polvo y depósitos donde almacenan la suciedad recogida, que luego se pueden vaciar fácilmente.
          </p>
        </li>
        <li>
        <p> <span className='font-bold'>Detección de bordes: </span>
        Pueden detectar y evitar caer por escaleras o desniveles
        </p>
        </li>
      </ul>
      <h3 className='mt-10 text-3xl font-bold mb-10'> Ventajas de usar un robot aspirador </h3>
       <Table/>
    </div>

  </section>
  )
}

export default Section1