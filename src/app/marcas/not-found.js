"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import React from 'react'

function NotFound() {
    const route =  usePathname();
  return (
    <div className='flex justify-center flex-col gap-10 bg-slate-300 h-screen'>
        <h1 className='text-4xl text-center '> Producto no encontrado </h1>
        <button > <Link href="/" className='bg-blue-600 px-5 py-2 rounded-xl text-white uppercase hover:bg-blue-500'>Volver a inicio</Link> </button>
    </div>
  )
}

export default NotFound