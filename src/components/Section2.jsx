"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import Marca from './Marca'
import { marcas } from '@/data/marcas'
function Section2() {
  return (
    <section className='pt-10 bg-slate-100'>
      <h2 className='text-center text-4xl font-bold'>
      Marcas y Modelos Populares
      </h2>
        <p className='mt-2 text-center mb-10'>No sabes cuál elegir? Aquí te mostramos las mejores opciones elegidas por los usuarios con mas de +1000 valoraciones</p>
      
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 container mx-auto gap-5 p-5'>
      {marcas.map(marca=> (<Marca key={marca.id} marca={marca}/>))}
      </div>
    </section>
  )
}

export default Section2