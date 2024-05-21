import React, { useRef } from 'react'
import i1 from "../assets/icon-star.svg"
import i2 from "../assets/icon-minus.svg"
import i3 from "../assets/icon-plus.svg"
import  {useState} from "react"

function FrequentlyAskedQuestion() {
   const [f1, setf1]=useState(false);
   const [f2,setf2] = useState(false);
   const [f3,setf3] = useState(false);
   const [f4,setf4] = useState(false);
   
   

  return (
   <>
     <div class="container">
      <div class="heading">
        <img src={i1} alt="" />
        <h1>FAQs</h1>
      </div>

      <div class="question">
        <h4>What is CourseHub, and how will it help me?</h4>
        <img src={i3} alt=""  onClick={()=>{
            setf1(true);
            setf2(false);
            setf3(false);
            setf4(false);
        }}  className={` plus ${f1? "hidden":""}`}/>
        <img src={i2} alt="" className={`cross ${f1? "":"hidden"}`} 
          onClick={()=>{
            setf1(false);
            setf2(false);
            setf3(false);
            setf4(false);
        }}
         />
      </div>

      <p class={`para ${f1? "":"hidden"}`}>
        courseHub offers realistic coding challenges & real life business case study to help
        improve their frontend coding skills with projects in HTML, CSS, and
        JavaScript. It's suitable for all levels and ideal for portfolio
        building.
      </p>
      <hr />
      <div class="question">
        <h4>Is CourseHub free?</h4>
        <img src={i3} alt="" onClick={()=>{
            setf1(false);
            setf2(true);
            setf3(false);
            setf4(false);
        }}  className={`plus ${f2? "hidden":""}`}/>
        <img src={i2} alt="" className={`cross ${f2? "":"hidden"}`}  onClick={()=>{
            setf1(false);
            setf2(false);
            setf3(false);
            setf4(false);
        }}  />
      </div>

      <p class={`para ${f2? "" : "hidden"}`}>
        Yes, courseHub offers both free and premium courses
        with the free option providing access to a range of projects suitable
        for all skill levels.
      </p>
      <hr />
      <div class="question">
        <h4>Can I watch video lecture if i missed one live?</h4>
        <img src={i3} alt="" onClick={()=>{
            setf1(false);
            setf2(false);
            setf3(true);
            setf4(false);
        }}  className={`plus ${f3? "hidden":""}`}/>
        <img src={i2} alt="" className={`cross ${f3? "":"hidden"}`}  onClick={()=>{
            setf1(false);
            setf2(false);
            setf3(false);
            setf4(false);
        }}  />
      </div>

      <p  className={`para ${f3? "" : "hidden"}`}>
        Yes, you can watch video lecture you missed it . even you can watch it anytime , anynumber of times.
      </p>
      <hr />
      <div class="question">
        <h4>How can I get help if I'm stuck on a courseHub challenge?</h4>
        <img src={i3} alt="" onClick={()=>{
            setf1(false);
            setf2(false);
            setf3(false);
            setf4(true);
        }}  className={`plus ${f4? "hidden":""}`}/>
        <img src={i2} alt="" className={`cross ${f4? "":"hidden"}`}  onClick={()=>{
            setf1(false);
            setf2(false);
            setf3(false);
            setf4(false);
        }}  />
      </div>

      <p className={`para ${f4? "" : "hidden"}`}>
        The best place to get help is inside courseHub's Discord
        community. There's a help channel where you can ask questions and seek
        support from other community members.
      </p>
    </div>
    
   </>
  )
  
     
}

export default FrequentlyAskedQuestion