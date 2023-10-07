"use client"
import Navbar from '@/components/Navbar'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import { Open_Sans } from 'next/font/google'
import { useState } from 'react'
const open_sans = Open_Sans({ subsets: ['latin'] })
export default function Home() {
  return (
<div className='' >
  
    <main 
        className={` bg-black h-screen bg-no-repeat bg-cover bg-center container mx-auto flex items-center flex-col bg-custom-image ${open_sans.className}`}
        > 
        <h1 className=' md:mt-28 mt-11 text-center md:px-20 font-extrabold text-5xl text-white mx-10'>
        Robot Aspiradores: La Revolución en la Limpieza del Hogar
        </h1>
        <p className='md:mt-28 mt-11 text-center md:text-left md:text-xl flex justify-center mx-20 md:px-40 text-white'>
        Automatiza la limpieza con la tecnología del momento con un dispositivo diseñado para limpiar suelos de manera autónoma y sin necesidad de intervención humana constante
         </p>
      </main>
        <Section1/>
        <Section2/>
        <Section3/>
      <section>
      <h2>
      Cuidado y Mantenimiento
      </h2>
      </section>
      <section>
      <h2>
      Compra en Línea
      </h2>
      </section>
      <section>
      <h2>
      Novedades y Futuro de la Limpieza Robotizada
      </h2>
      </section>
      <section>
      <h2>Preguntas Frecuentes</h2>
      </section>
    </div>

  )
}
