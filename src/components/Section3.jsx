import Image from 'next/image'
import React from 'react'

function Section3() {
  return (
    <div>
        <h2 className='text-center text-4xl font-bold mt-10'> Beneficios de un Robot Aspirador</h2>

        <div className='flex flex-col justify-center items-center  gap-10 mt-10'>
            
            <div className='mt-5'>
                
                <div className='md:flex md:justify-center md:gap-5 md:items-center'>
                <Image src="/img/beneficio1.png" alt="Imagen Robot Aspirador" className='flex justify-center w-full md:w-fit' width={300} height={100}/>
               <div className='md:w-3/6'>
               <h3 className='text-3xl text-center mb-5 md:text-left font-bold mt-5 md:mt-0'>Ahorro de tiempo y comodidad</h3>
                <p className='ps-6 md:ps-0'>
                Un robot aspirador puede limpiar de forma autónoma mientras te ocupas de otras tareas o incluso cuando no estás en casa. Esto te permite ahorrar tiempo y esfuerzo en la limpieza diaria. <br>
                </br>
                No necesitas mover muebles ni preocuparte por alcanzar áreas difíciles de limpiar. Los robots aspiradores están diseñados para navegar alrededor de obstáculos y limpiar bajo muebles y camas.
                </p>
               </div>
                </div>
            </div>
            <div className='mt-5'>
                
                <div className='md:flex md:justify-center md:gap-5 md:items-center md:flex-row-reverse'>
                <Image src="/img/beneficio2.png" alt="Imagen Robot Aspirador" className='flex justify-center w-full md:w-fit' width={300} height={100}/>
               <div className='md:w-3/6'>
               <h3 className='text-3xl text-center mb-5 md:text-left font-bold mt-5 md:mt-0'>Programación y control remoto</h3>
                <p className='ps-6 md:ps-0'>
                Puedes programar el robot para que limpie a una hora específica cada día, lo que te permite mantener tu hogar limpio de manera regular sin tener que hacerlo manualmente. Algunos modelos incluso se pueden controlar mediante una aplicación móvil. 
                <br>
                </br>
                Puedes iniciar, detener o ajustar la limpieza desde tu teléfono inteligente, incluso cuando no estás en casa. Esto es útil si deseas iniciar una limpieza de último minuto antes de regresar a casa.
                </p>
               </div>
                </div>
            </div>
            <div className='mt-5'>
                <div className='md:flex md:justify-center md:gap-5 md:items-center '>
                <Image src="/img/beneficio3.png" alt="Imagen Robot Aspirador" className='flex justify-center w-full md:w-fit' width={300} height={100}/>
               <div className='md:w-3/6'>
               <h3 className='text-3xl text-center mb-5 md:text-left font-bold mt-5 md:mt-0'>Sensores y tecnología de mapeo</h3>
                <p className='ps-6 md:ps-0'>
                Los robots aspiradores están equipados con sensores que les permiten evitar obstáculos y caídas. Algunos modelos avanzados pueden crear mapas de tu hogar para una limpieza más eficiente. <br></br>
                Los <span className='font-bold'>sensores de choque</span>, a menudo ubicados en la parte frontal del robot, detectan cuando el robot entra en contacto con objetos sólidos. Cuando el robot detecta un obstáculo, ajusta su dirección para evitar la colisión y continúa su ruta de limpieza.
                </p>
               </div>
                </div>
            </div>
            <div className='mt-5'>
                <div className='md:flex md:justify-center md:gap-5 md:items-center md:flex-row-reverse '>
                <Image src="/img/beneficio4.png" alt="Imagen Robot Aspirador" className='flex justify-center w-full md:w-fit' width={300} height={100}/>
               <div className='md:w-3/6'>
               <h3 className='text-3xl text-center mb-5 md:text-left font-bold mt-5 md:mt-0'>Ideal para gente con mascotas</h3>
                <p className='ps-6 md:ps-0'>
                Como los robots aspiradores pueden programarse para limpiar a diario, mantienen tu hogar más limpio de forma constante, lo que puede ser beneficioso para personas con alergias o mascotas que dejan pelo. <br></br>
                Algunas personas encuentran que sus mascotas se divierten persiguiendo o interactuando con los robots aspiradores, lo que puede proporcionar entretenimiento adicional en el hogar.
                </p>
               </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Section3