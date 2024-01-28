"use cleint";
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';


export default function OneProject({mediaURL, desc, title, link}:any) {
  return (
    <div className='box-project'>
         <div>
               < Image 
                  alt=''
                  src={mediaURL}
               />
         </div>

         <div className='text'>
            <div>
                  <h2 className='text-light'>{title}</h2>
            </div>

            <div >
               <p className='text-white-50'>
               {desc}
               </p>
            </div>

            <div >
               <Link href={link} target='_blank'>
                  Link
               </Link>
            </div>
         </div>

    </div>
  )
}