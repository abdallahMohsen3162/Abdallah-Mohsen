import React from 'react'
import ecpc from "../../../public/ecpc.jpg";
import Image from 'next/image';

import face from "../../../public/face.png"
import git from "../../../public/git.png";
import linked from "../../../public/linked.png"
import email from "../../../public/gmail.png"
import codeforces from "../../../public/codefoeces.png"
import atcoder from "../../../public/atcoder.png"
import whats from "../../../public/whats.png"
import leetcode from "../../../public/leet.png"
export default function Contact() {
  return (
    <div className='contact' id='connect'>

        <div className='part1'>
            < Image 
                src={ecpc}
                alt=''
                width={300}
                className='profile-photo'
            />
            <div className='desc'>
                <p>Abdallah Mohsen</p>
                <p>Web develober</p>
            </div>
            <br /> <br />
            
            <div className='links'>
   

                <a href='https://github.com/abdallahMohsen3162?tab=repositories'>
                    < Image 
                    src={git}
                    alt=''
                    width={30}
                    height={30}
                    />
                </a>
                <a href='https://www.linkedin.com/in/abdalla-mohsen-3a9553227/'>
                    < Image 
                    src={linked}
                    alt=''
                    width={30}
                    height={30}
                    />
                </a>
                <a href='#'>
                    < Image 
                    src={email}
                    alt=''
                    width={30}
                    height={30}
                    />
                </a>
                <a href='https://codeforces.com/profile/__abdallah__'>
                    < Image 
                    src={codeforces}
                    alt=''
                    width={30}
                    height={30}
                    />
                </a>
                <a href='https://atcoder.jp/users/abdallah3162'>
                    < Image 
                    src={atcoder}
                    alt=''
                    width={30}
                    height={30}
                    />
                </a>
                <a href=''>
                    < Image 
                    src={whats}
                    alt=''
                    width={30}
                    height={30}
                    />
                </a>
                <a href='https://leetcode.com/abdallahMohsen3162/'>
                    < Image 
                    src={leetcode}
                    alt=''
                    width={30}
                    height={30}
                    />
                </a>
            </div>



        </div>
      
    </div>
  )
}
