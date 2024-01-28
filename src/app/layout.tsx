"use client"
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
// import 'bootstrap/dist/css/bootstrap.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Navbar from './components/navbar'
import { useState } from 'react'
config.autoAddCss = false

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [nav, setnav] = useState<boolean>(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <button onClick={() => setnav((prev) => !prev)} className='absolute-button'>
        <FontAwesomeIcon icon={faBars} />
        </button>
        {
          (nav)?(
            < Navbar />
          ):(
            ""
          )
        }
        {children}
        
        </body>
    </html>
  )
}
