import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Echyzos Disfraces',
  description: 'Tienda web de disfraces',
}

export default function RootLayout({ children }) {


  return (
    <html lang="es">
      <body className="h-screen flex flex-col">

        <main className="flex-1 flex flex-col">
          <Navbar />
          {children}
        </main>

      </body>
    </html>
  )
}
