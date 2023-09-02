import React from 'react'
import Skill from './Skill'
export default function Skills() {
    let arr = [
        "HTML5",
        "CSS3",
        "Javascript",
        "React",
        "Nextjs",
        "Django",
        "MSSQL Server",
        "Vue js",
        "Redux",
        "Redux toolkit",
        "Bootstrap",
        "Tailwind",
        "Rest api",
        "Mongodb",
        "Ajax",
        "Json",
        "Git",
        "TensorFlow",
        "Sklearn",
        "Postgresql",
        "Sass",
        "Typescript",
    ]
  return (
    <>
    <h1 className='title'>Skills</h1>
    <div className='skills' id='skills'>
        
      {
        arr.map((el, idx) => {
            return(
                < Skill name={el}/>
            )
        })
      }
    </div>
    </>
  )
}
