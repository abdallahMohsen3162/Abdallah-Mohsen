import React from 'react'
interface Skill{
    name:string
}
export default function Skill({name} : Skill) {
  return (
    <div className='skill'>
        {name}
    </div>
  )
}
