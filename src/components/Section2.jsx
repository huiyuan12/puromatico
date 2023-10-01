"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
function Section2() {
  return (
    <section className='pt-10 bg-slate-100'>
      <h2 className='text-center text-4xl font-bold'>
      Marcas y Modelos Populares
      </h2>
        <p className='mt-2 text-center mb-10'>No sabes cuál elegir? Aquí te mostramos las mejores opciones elegidas por los usuarios con mas de +1000 valoraciones</p>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 container mx-auto gap-5 p-5'>
      
        <div className='rounded-xl border-blue-100 shadow-xl p-5 flex flex-col items-center justify-around bg-white' > 
        <Link href="/marcas/SHARKION">
          <h3 className='text-2xl font-bold'>SHARK ION</h3>
          <Image src="/img/shark.jpg" width={300} height={200} alt="Imagen Aspirador Robot Shark"/>
          </Link>
          <a href="https://www.amazon.com/-/es/aspiradora-alfombra-AV751-conexi%C3%B3n-funcionamiento/dp/B08634VWVF/ref=sr_1_8?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=robot%2Baspirador&sr=8-8&th=1" className='bg-amber-500 p-2 border-black flex items-center gap-2 text-center text-2xl hover:bg-amber-400 transition-all duration-100 border border-black-500 mt-2 w-fit'> <AiOutlineShoppingCart/> Ver producto en amazon</a>

        </div>
      
        <div className='rounded-xl border-blue-100 shadow-xl p-5 flex flex-col items-center justify-around bg-white' > 
          <Link href="/marcas/LEFANT">
          <h3 className='text-2xl font-bold'>LEFANT</h3>
          <Image src="/img/lefant.jpg" width={300} height={200} alt="Imagen Aspirador Robot Lefant"/>
          </Link>
          <a href="https://www.amazon.com/aspirador-autom%C3%A1tica-mascotas-limpieza-M210/dp/B08R9LK9K3/ref=sr_1_2_sspa?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=robot+aspirador&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" className='bg-amber-500 p-2 border-black flex items-center gap-2 text-center text-2xl hover:bg-amber-400 transition-all duration-100 border border-black-500 mt-2 w-fit justify-center' > <AiOutlineShoppingCart/> Ver producto en amazon</a>
        </div>
        <div className='rounded-xl border-blue-100 shadow-xl p-5 flex flex-col items-center justify-around bg-white' > 
        <Link href="/marcas/MAMNV">
          <h3 className='text-2xl font-bold'>MAMNV</h3>
          <Image src="/img/mamnv.jpg" width={300} height={200} alt="Imagen Aspirador Robot mamnv"/>
          </Link>
          <a href="https://www.amazon.com/Robot-aspirador-trapeador-autocarga-aplicaci%C3%B3n/dp/B0B1WS4FQ2/ref=sr_1_7_sspa?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=robot%2Baspirador&sr=8-7-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&th=1" className='bg-amber-500 p-2 border-black flex items-center gap-2 text-center text-2xl hover:bg-amber-400 transition-all duration-100 border border-black-500 mt-2 w-fit h-fit'> <AiOutlineShoppingCart/> Ver producto en amazon</a>
        </div>
        <div className='rounded-xl border-blue-100 shadow-xl p-5 flex flex-col items-center justify-around bg-white' > 
        <Link href="/marcas/SHARKION">
          <h3 className='text-2xl font-bold'>SHARK ION</h3>
          <Image src="/img/zcwa.jpg" width={300} height={200} alt="Imagen Aspirador Robot zcwa"/>
          </Link>
          <a href="https://www.amazon.com/aspirador-trapeador-combinado-autom%C3%A1tica-compatible/dp/B0C4H9RR28/ref=sr_1_2_sspa?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=robot+aspirador&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" className='bg-amber-500 p-2 border-black flex items-center gap-2 text-center text-2xl hover:bg-amber-400 transition-all duration-100 border border-black-500 mt-2'><AiOutlineShoppingCart/> Ver producto en amazon</a>
        </div>
      </div>
    </section>
  )
}

export default Section2