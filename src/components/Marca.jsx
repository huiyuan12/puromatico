"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

function Marca({marca}) {
    const {id,nombre,enlace,imagen} = marca
  return (
    <div className='rounded-xl border-blue-100 shadow-xl p-5 flex flex-col items-center justify-around bg-white' > 
        <Link href={`/marcas/${nombre}`}>
          <h3 className='text-2xl font-bold'>{nombre.toUpperCase() }</h3>
          <Image src={imagen} width={300} height={200} alt="Imagen Aspirador Robot Shark"/>
          </Link>
          <a href={enlace} className='bg-amber-500 p-2 border-black flex items-center gap-2 text-center text-2xl hover:bg-amber-400 transition-all duration-100 border border-black-500 mt-2 w-fit justify-center'> <AiOutlineShoppingCart/> Ver producto en amazon</a>
        </div>
  )
}

export default Marca