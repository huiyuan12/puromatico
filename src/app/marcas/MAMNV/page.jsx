import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function page() {
  return (
    <>
    <div>
      <div className='bg-custom-image-mamnv bg-cover h-screen bg-center bg-no-repeat flex flex-col items-center'>

  
      <h1 className='text-center text-4xl font-bold text-white py-20'>Aspirador Robot Automático MAMNV</h1>
      <p className='text-center text-white text-2xl '>
       Ideal para pisos duros, alfombras de pelo corto y autorecargable
      </p>
      <button className='bg-blue-600 px-10 rounded-xl py-2 w-fit mt-60 text-xl text-white hover:bg-blue-500 transition-all duration-200' >
        <a href="https://www.amazon.com/Robot-aspirador-trapeador-autocarga-aplicaci%C3%B3n/dp/B0B1WS4FQ2/ref=sr_1_7_sspa?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=robot%2Baspirador&sr=8-7-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&th=1">Comprar MAMNV</a></button>
      </div>
    </div>
    <div>
      <h2>Por qué elegir MAMNV</h2>
      <p>
        
      </p>
    </div>
    <main className='mt-20'>
      <h2 className='text-center text-2xl font-bold'>Los mejores Robot Aspiradores de MAMNV </h2>
        <div>
          <h3> Shark ION Matrix </h3>
          <p>
          Robot aspirador y trapeador 2 en 1 con trapeador sónico
          </p>
          <Image src="/img/sharkMatrix.jpg" alt="Imagen Robot Aspirador SharkMatrix" width={300} height={300}></Image>
        </div>
    </main>
   </>
  )
}

export default page