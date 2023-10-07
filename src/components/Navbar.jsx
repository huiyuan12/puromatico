"use client"
import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'
import { marcas } from '@/data/marcas'

function Navbar() {
    const [openMenu,setOpenMenu] = useState(false);
    const [openMarcas,setOpenMarcas] = useState(false);
    const [openTipos,setOpenTipos] = useState(false);
  return (
    <div className=' bottom-10 right-10 text-white fixed  p-2 md:hidden'> 
    {openMenu &&
    <div className={`bg-slate-100 `}>
    <nav className='py-2 w-32'>
        <ul>
            <li className='text-black border-b-2'>
            <div className='flex justify-between px-5'>
            <p className=' py-2 font-bold  gap-5' > Marcas   </p> 
            <button onClick={()=>{setOpenMarcas(!openMarcas); setOpenTipos(false)}}> {openMarcas? "X ":"Y"}</button>
            </div>
            {openMarcas &&  
            <ul className='border-t-2'>
                
                {marcas.map((marca,index)=> <li key={marca.id} className={` ${index < marcas.length-1 ? "border-b-2" :""}`}> <Link className="block px-4 py-2 hover:bg-blue-100" href={`/marcas/${marca.nombre}`}> {marca.nombre.charAt(0).toUpperCase() + marca.nombre.slice(1).toLocaleLowerCase()}</Link></li>)}    
               
            </ul>}
            </li>

            <li className='text-black'>
            <div className='flex justify-between px-5 '>
            <p className=' py-2 font-bold ' > Tipos   </p> 
            <button onClick={()=>{setOpenTipos(!openTipos); setOpenMarcas(false)}}> {openTipos? "X ":"Y"}</button>
            </div>
            {openTipos &&  
            <ul>
                <li > <Link className="block px-4 py-2 hover:bg-blue-100 border-b-2 border-t-2" href={`/tipos/`}> Con rodillo </Link></li>
                <li > <Link className="block px-4 py-2 hover:bg-blue-100 border-b-2" href={`/tipos/`}> Sin rodillo </Link></li>
                <li > <Link className="block px-4 py-2 hover:bg-blue-100 border-b-2" href={`/tipos/`}> Friega suelos </Link></li>
                <li > <Link className="block px-4 py-2 hover:bg-blue-100" href={`/tipos/`}> Todo en uno </Link></li> 
                </ul>
            }
            </li>
        </ul>
    </nav>
</div>}
    <div className='flex justify-end'>
    <button className='bg-white p-5 shadow-2xl rounded-full  text-black' onClick={()=>{setOpenMenu(!openMenu);}}> MENU </button> 
    </div>
    
    </div>
  )
}

export default Navbar