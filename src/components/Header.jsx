import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { marcas } from '@/data/marcas'
function Header() {
  return (
    <header className='p-4  bg-gray-800 text-white'>
       <div className='container mx-auto flex justify-around items-center'>
       <Link href="/"><Image src="/img/logo2.png" alt='Imagen Logo puromatico' width={200} height={200} className='text-white'></Image></Link>
        <nav>
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
                <li className='hover:text-blue-200'>
                    <Link href="/">Mejor Robot Aspirador</Link>
                </li>
                <li className='hover:text-blue-200'>
                    <Link href="/">Blog y preguntas frecuentes</Link>
                </li>
            </ul>
        </nav>
        
       </div>
    </header>
  )
}

export default Header