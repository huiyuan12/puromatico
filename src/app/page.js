import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import { Open_Sans } from 'next/font/google'
const open_sans = Open_Sans({ subsets: ['latin'] })
export default function Home() {
  return (
<>
    <main 
        className={`h-screen bg-no-repeat bg-cover bg-center container mx-auto flex items-center flex-col bg-custom-image ${open_sans.className}`}
        > 
        <h1 className=' md:mt-28 mt-11 text-center md:px-20 font-extrabold text-6xl text-white'>
        Robot Aspiradores: La Revolución en la Limpieza del Hogar
        </h1>
        <p className='md:mt-28 mt-11 text-center md:text-left md:text-2xl flex justify-center md:px-40 text-white'>
        En la era moderna, la tecnología ha transformado la forma en que realizamos las tareas cotidianas. Un ejemplo claro de esto es la evolución de los robot aspiradores, que han revolucionado la limpieza del hogar. En esta página web y tienda en línea, te guiaremos a través del emocionante mundo de los robot aspiradores, brindándote información detallada, reseñas, comparaciones y recomendaciones para encontrar el dispositivo perfecto para tu hogar.
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
      
    </>

  )
}
