"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
// Import Swiper styles
import "swiper/scss"; 
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

//images
import Image from 'next/image';
import intersteller from "../public/inter.png";
import gamdias from "../../../public/gamdias.png";
import gamea from "../../../public/gamea.png";
import protalio from "../../../public/protalio.png";
import flash from "../../../public/flash.png";
import burger from "../../../public/burger.png";
import comb from "../../../public/comb.png";
import calc from "../../../public/calc.png";
import local from "../../../public/local.png";
import temp from "../../../public/temp.png";
import inf from "../../../public/infnix.png"
import realfood from "../../../public/first.png"
import profil from "../../../public/prof.png";
import inter from "../../../public/inter.png";
import graph from "../../../public/graph.png";
import bondi from "../../../public//bonci.png";
import alarm from "../../../public/alarm.png";
import metro from "../../../public/metro.png";
import ecommerce from "../../../public/ecommerce.png";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function SwiperCoverflow() {
    let links = [
      "https://vadaxi.vercel.app/",
      "https://metro-rouge.vercel.app/",
      "https://react-hamburgers.vercel.app/",
      "https://flash-store.vercel.app/",
      "https://alarm-react-eight.vercel.app/",
      "https://abdallahmohsen3162.github.io/Game.A/",
      "https://abdallahmohsen3162.github.io/GAMDIAS/indesx",
      "https://react-combinatorics.vercel.app/",
      "https://abdallahmohsen3162.github.io/interstellar/",
      "https://abdallahmohsen3162.github.io/TemplateFire/",
      "https://abdallahmohsen3162.github.io/Connected-Graph_II/",
      "https://abdallahmohsen3162.github.io/gameinfinix/",
      "https://abdallahmohsen3162.github.io/local-storage-app/",
      "https://abdallahmohsen3162.github.io/First/first-temp.html",
      "https://abdallahmohsen3162.github.io/PROFILE/indesx",
      "https://abdallahmohsen3162.github.io/bondi/indesx",
      "https://protalio.com/en",
      "https://react-calculator-rust-one.vercel.app/",
      
    ]
    let arr = [
      ecommerce,
      metro,
      burger,
      flash,
      alarm,
      gamea,
      gamdias,
      comb,
      inter,
      temp,
      graph,
      inf,
      local,
      realfood,
      profil,
      bondi,
      protalio,
      calc,
    ];

  return (
    <div className="App">
      <Swiper
      modules={[EffectCoverflow, Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        slidesPerView={2}
        centeredSlides
        style={{ height: "500px" }}
        className="slider"
      >
        
        {
            arr.map((el, idx) => {
                return(
                    <SwiperSlide>
                        <a href={links[idx]}>
                            < Image 
                              loading='lazy'
                                src={el}
                                alt=""
                                className="swipper-project-img"
                            />
                        </a>
                    </SwiperSlide>
                )
            })
        }

      </Swiper>
    </div>
  );
}
