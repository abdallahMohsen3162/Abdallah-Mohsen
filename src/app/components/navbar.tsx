import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'

export default function Navbar() {
  return (
    <div className='navbar'>
        <a href='#landing'>
        < FontAwesomeIcon icon={faHouse}/>
        </a>
        <a href='#Projects'>
        < FontAwesomeIcon icon={faGear} />
        </a>
        <a href='#skills'>
        <FontAwesomeIcon icon={faStar} />   
        </a> 
        <a href='#connect'>
        <FontAwesomeIcon icon={faEnvelope} />
        </a>
        </div>
  )
}
