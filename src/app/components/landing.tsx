import React from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Image from 'next/image';
import img from "../../../public/64645620_869024723458308_1197866069616754688_n.jpg"
export default function Landing() {
  return (
    <div className='landing' id='landing'>

      <div className='bg'>
        	<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
      </div>

        <div className='desc'>
            <h1>Hi, I'm Abdallah Mohsen </h1>
            <h1>and I'm a  </h1>
            <h1 className='job-title'>Front end Developer  </h1>
        </div>

        <div className='visual'>
            < Image 
                src={img}
                width={250}
                height={250}
                alt='photo'
                className='profile-photo'
            />

        </div>


        
    </div>
  )
}
