import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='p-4  bg-gray-800 text-white'>
       <div className='container mx-auto flex justify-around items-center'>
       <Link href="/"><Image src="/img/logo4.png" alt='Imagen Logo puromatico' width={200} height={200} className='text-white'></Image></Link>
        <nav>
            <ul className='flex gap-5 '>
                <li className='hover:text-blue-200'>
                    <Link href="/">Inicio</Link>
                </li>

                <div className="relative group">
                <li className='  text-white  rounded focus:outline-none cursor-pointer mb-2 hover:text-blue-200'>Marcas</li>
                <ul className='absolute hidden space-y-2 bg-white text-gray-700 border border-gray-300 shadow-md group-hover:block p-2'>
                <li><Link href="/marcas/ZCWA" className="block px-4 py-2 hover:bg-blue-100">ZCWA</Link></li>
                <li><Link href="/marcas/LEFANT" className="block px-4 py-2 hover:bg-blue-100">LEFANT</Link></li>
                <li><Link href="/marcas/MAMNV" className="block px-4 py-2 hover:bg-blue-100">MAMNV</Link></li>
                <li><Link href="/marcas/SHARKION" className="block px-4 py-2 hover:bg-blue-100">SHARK ION</Link></li>

                </ul>
                </div>
            </ul>
        </nav>
        
       </div>
    </header>
  )
}

export default Header