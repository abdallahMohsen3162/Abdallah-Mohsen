import React from 'react'
import OneProject from './oneProject'
import Image from 'next/image'
import inter from "../../../public/inter.gif";
import avoid from "../../../public/avoid.gif";
import crud from "../../../public/CRUD.gif";
import guess from "../../../public/geuss.gif";
import connect4 from "../../../public/connet4.gif";
import metro from "../../../public/metro.gif";
import stu from "../../../public/stu.gif";
import balls from "../../../public/balls.gif";
import xo from "../../../public/xo.gif";
import prot from "../../../public/protalio.gif";
import dict from "../../../public/dict.gif";

let backends = [
  {
    src:crud,
    title:"Ecommerce dashboard",
    desc:"Online store dashboard with supported delete, add, update items, json-server based backend.",
    link:'https://github.com/abdallahMohsen3162/CRUD-E-commerce'
  },
  {
    src:prot,
    title:"Online courses",
    desc:"online courses website. laravel, jquery, bootstrap, sass",
    link:'https://protalio.com/en'
  },
  {
    src:metro,
    title:"Metro",
    desc:"Application guides you in the cairo metro, gives the shortest path between current station and destination made with next13, typescript, bootstrap,graph algorithms",
    link:'https://github.com/abdallahMohsen3162/metro'
  },
  {
    src:stu,
    title:"Students affair",
    desc:"Django based website for students affair,courses registration sytem, postgresql database",
    link:'https://github.com/abdallahMohsen3162/students-affairs-project-2022'
  },
   {
    src:dict,
    title:"quiz generator",
    desc:"App to learn english and a quiz generator (nextjs, laravel, mysql)",
    link:'https://github.com/abdallahMohsen3162/dictionary-app-laravel'
  }, 
  {
    src:xo,
    title:"XO online game",
    desc:"xo online game, network socket, nextjs13, typescript, bootstrap, the game provides dynamic board size with good time complexity",
    link:'https://github.com/abdallahMohsen3162/dynamic-online-xo'
  },

]

let priv = [
  {
    src:inter,
    title:"Intersteller",
    desc:"Interactive game with vanilla javascript and canvas js",
    link:'https://abdallahmohsen3162.github.io/interstellar/'
  },

  {
    src:avoid,
    title:"Avoid redballs",
    desc:"Interactive game with vanilla javascript and canvas js",
    link:'https://abdallahmohsen3162.github.io/Game.A/'
  },
  {
    src:guess,
    title:"Guess the number",
    desc:"Guess the numbe game with vanilla javascript, bootstrap5",
    link:'https://abdallahmohsen3162.github.io/GAMDIAS/random.html'
  },
  {
    src:connect4,
    title:"Connect4",
    desc:"Connect4 competitive game with vanilla javascript, bootstrap5",
    link:'https://abdallahmohsen3162.github.io/GAMDIAS/connect4.html'
  },
  {
    src:balls,
    title:"ball jump",
    desc:"Interactive game with vanilla javascript and canvas js",
    link:'https://abdallahmohsen3162.github.io/gameinfinix/'
  },
]
import profile from "../../../public/profile.gif";
import bondi from "../../../public/bondi.gif";
import tempFire from "../../../public/tempFire.gif";
import alarm from "../../../public/alarm.gif";
import vadaxi from "../../../public/vadaxi.gif";
import burger from "../../../public/burger.gif";

let frontend = [
  {
    src:profile,
    title:"My profile 2022",
    desc:"My profile 2022, a real practice of frontend",
    link:"https://abdallahmohsen3162.github.io/PROFILE/indesx"
  },
  {
    src:bondi,
    title:"Bondi",
    desc:"Frontend practice, the first one, bootstrap5",
    link:"https://abdallahmohsen3162.github.io/bondi/indesx"
  },
  {
    src:tempFire,
    title:"Template",
    desc:"Frontend practice, bootstrap5",
    link:"https://abdallahmohsen3162.github.io/TemplateFire/#"
  },
  {
    src:alarm,
    title:"Alarms app",
    desc:"multible alarms task, nextjs13",
    link:"https://alarm-react-eight.vercel.app/"
  },
  {
    src:vadaxi,
    title:"Vadaxi",
    desc:"online store prototype",
    link:"https://vadaxi.vercel.app/"
  },
  {
    src:burger,
    title:"burger",
    desc:"burger online restaurant prototype",
    link:"https://react-hamburgers.vercel.app/"
  },
]



export default function Projects_describtion() {
  return (
    <div className='projects-all'>

    <div className='clear'>
      <h1>Backend</h1>
    </div>

    {
        backends.map((el, idx) => {
          return < OneProject mediaURL={el.src} desc={el.desc} title={el.title} link={el.link}/>
        })
    }

    
    <div className='clear'>
      <h1>Private practice</h1>
    </div>

    
    {
      priv.map((el, idx) => {
        return < OneProject mediaURL={el.src} desc={el.desc} title={el.title} link={el.link}/>
      })
    }

    <div className='clear'>
      <h1>Frontend</h1>
    </div>

    {
      frontend.map((el, idx) => {
        return < OneProject mediaURL={el.src} desc={el.desc} title={el.title} link={el.link}/>
      })
    }
      
    </div>
  )
}
