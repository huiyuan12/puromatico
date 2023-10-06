import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Puromatico',
  description: 'Pagina informativa sobre robot aspiradores',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.className}>
      <body>
        <Header/>
     
        {children}</body>
    </html>
  )
}
