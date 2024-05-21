import React from 'react'

import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useEffect } from 'react';
import SwiperCore from "swiper"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
SwiperCore.use([Autoplay, Pagination]);

import s1 from "../assets/s1.jpg";
import s2 from "../assets/p2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import CategoryBox from '../ui-components/CategoryBox';
import c1 from "../assets/c1.avif"
import c2 from "../assets/c2.avif"
import c3 from "../assets/c3.avif"
import c4 from "../assets/c4.avif"
import c5 from "../assets/c5.avif"
import b1 from "../assets/b1.png"

import b2 from "../assets/b2.png"
import b3 from "../assets/b3.png"
import b4 from "../assets/b4.png"
import i1 from "../assets/i1.jpg"
import CallToActionSection from '../ui-components/CallToActionSection';
import {useState} from "react"
import TestimonialCard from '../ui-components/TestimonialCard';

import Page from '../ui-components/Pagination';
import Wrapper from '../ui-components/Wrapper';
import InstitueWrapper from '../ui-components/InstitueWrapper';

function Home() {
   let brandLogo=[b1,b2,b3,b4]
  let categoryTitle=[{title:"Business management",img:c1},{title: "Digital marketing & promte",img:c2},{title:"graphic design",img:c3},{title:"advanced ui & ux",img:c4},{title:"Full stack devloper",img:c5},{title:"ai & machine learning",img:c3}]
  const url=`https://api.unsplash.com/search/photos?page=1&query=online&client_id=62JGTw61t2q9MRohVgd7bqiyses6OPviMSyuu8Q9Gao`
  let [imgs,setImg] = useState();
     useEffect(()=>{
      fetch(url).then((res)=>{
        return res.json()
      }).then((data)=>{console.log(data)
        setImg(data.results)
       
      }).catch((err)=>{console.log(err)})
     },[url])


  return (
    <div className='w-[82vw]  min-h-[100vh] bg-white'>
      <div className='w-[77vw] h-[30vw] pt-4 pl-5 pr-5  mx-auto'>
      <Swiper className='w-[80%] h-[60vh] rounded-xl swiper-container '  
      // install Swiper modules
      
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay
      slidesPerGroup={1} 
      loop={true} // Enable continuous loop
      
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
      {imgs?.map((item)=>
       <SwiperSlide><img src={item.urls.regular} alt="" className='swipeimg w-full' /></SwiperSlide>
    )}
      
    </Swiper>

      </div>
     
      
        <Wrapper/>
        <InstitueWrapper/>
        


        <div className='w-[80%] mx-auto mt-20 flex flex-col ' >
          <h1 className='text-[1.2rem] text-center font-semibold capitalize text-[#565656]'>over <span className='text-[red]
          '>1 Lakh+</span> job oppuritunites are creating </h1>
          <h1 className=' mt-9 text-[2.3rem] capitalize font-bold text-center'>Our Hiring Partners </h1>
          <div className='flex items-center justify-center gap-10 mt-[-39px]'>
            {brandLogo.map((item,index)=>{
              return <img src={item} alt=""  className={`w-[8rem] h-[8rem]  mt-[2rem]   mb-[2rem] ${index==2? "h-[1.9rem]" : "" }
            ${index==3? "h-[1.9rem]" : ""}   `}
              />
            })}
          </div>


        </div>
        <CallToActionSection img={i1} title1={"We offered Best and organized content"} title2={"learn from best to become best "} btnTitle={"eplore courses"}></CallToActionSection>

        {/* testimonial section */}
        <div className='w-[99%] mx-auto px-5 mb-10 mt-[4rem] '>
          <div><h1 className='text-[3vw] text-[#6a6060] font-medium mb-10 mt-10 '>What our students says</h1></div>
        <Swiper className='w-[80%] h-[60vh] rounded-xl swiper-container'
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={-300}
      slidesPerView={1}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      slidesPerGroup={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {[{name:"joh de",view:"lorem ipsum dolor sit amet con elit",email:"jhohde@gmail.com",},
        {name:"reain de",view:"lorem ipsum dolor sit amet con elit",email:"read34e@gmail.com"},
        {name:"ashmith kd",view:"lorem ipsum dolor sit amet con elit",email:"sdoowee@gmail.com"},
        {name:"redji defro",view:"lorem ipsum dolr sit amet con elit",email:"redjs3@gmail.com"},
        {name:"smit ben",view:"lorem ipsum dolor sit amet con elit",email:"smitd@gmail.com"},
        {name:"smit ben",view:"lorem ipsum dolor sit amet con elit",email:"smitd@gmail.com"},
        {name:"Natasha romnoroff",view:"lorem ipsum dolor sit amet con elit",email:"natashd@gmail.com"},
      ].map((item,index) =><SwiperSlide> <TestimonialCard item={item} index={index}/></SwiperSlide>)}
      
    </Swiper>

        

        </div>

        
     
    </div>
  )
}

export default Home

 
 