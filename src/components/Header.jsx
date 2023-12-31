import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { marcas } from '@/data/marcas'
function Header() {
  return (
    <header className='p-4  bg-gray-800 text-white'>
       <div className='container mx-auto flex md:justify-around justify-center md:items-center '>
       <Link href="/"><Image src="/img/logo2.png" alt='Imagen Logo puromatico' width={200} height={200} className='text-white'></Image></Link>
        <nav className='hidden md:block'>
            <ul className='flex gap-5 '>
                <li className='hover:text-blue-200'>
                    <Link href="/">Inicio</Link>
                </li>

                <div className="relative group">
                <li className='  text-white  rounded focus:outline-none cursor-pointer mb-2 hover:text-blue-200'>Marcas</li>
                <ul className='absolute hidden space-y-2 bg-white text-gray-700 border border-gray-300 shadow-md group-hover:block p-2'>
                {marcas.map(marca=> <li key={marca.id}> <Link className="block px-4 py-2 hover:bg-blue-100" href={`/marcas/${marca.nombre}`}> {marca.nombre.charAt(0).toUpperCase() + marca.nombre.slice(1).toLocaleLowerCase()}</Link></li>)}
                </ul>
                </div>
                <div className="relative group">
                <li className='  text-white  rounded focus:outline-none cursor-pointer mb-2 hover:text-blue-200'>Tipos de robot aspirador</li>
                <ul className='absolute hidden space-y-2 bg-white text-gray-700 border border-gray-300 shadow-md group-hover:block p-2'>
                <li > <Link className="block px-4 py-2 hover:bg-blue-100" href={`/tipos/`}> Con rodillo </Link></li>
                <li > <Link className="block px-4 py-2 hover:bg-blue-100" href={`/tipos/`}> Sin rodillo </Link></li>
                <li > <Link className="block px-4 py-2 hover:bg-blue-100" href={`/tipos/`}> Friega suelos </Link></li>
                <li > <Link className="block px-4 py-2 hover:bg-blue-100" href={`/tipos/`}> Todo en uno </Link></li>
                </ul>
                </div>
                <li className='hover:text-blue-200'>
                    <Link href="/mejor-robot-aspirador">Mejor robot de limpieza</Link>
                </li>
                <li className='hover:text-blue-200'>
                    <Link href="/blog">Blog y preguntas frecuentes</Link>
                </li>
            </ul>
        </nav>
       </div>
    </header>
  )
}

export default Header