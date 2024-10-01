import React from 'react'
import user from "../assets/avt1.avif"
import SideNavbarbtn from '../ui-components/SideNavbarbtn'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import illus from "../assets/sidebarillus.png"
import illus2 from "../assets/Questions-pana.png"
function SideNavBar({visible}) {
  let [bg1,setBg1] = useState();
   let [bg2,setBg2] = useState();
   let [bg3,setBg3] = useState();
   let [bg4,setBg4] = useState();
   const handleOnClick = () => {
    
    if(index===0){
        setBg1(true);
        setBg2(false);
        setBg3(false);
        setBg4(false);
    }
    else if(index===1){
        setBg1(false);
        setBg2(true);
        setBg3(false);
        setBg4(false);
    }
    else if(index===2){
        setBg1(false);
        setBg2(false);
        setBg3(true);
        setBg4(false);
    }
    else if(index===3){
        setBg1(false);
        setBg2(false);
        setBg3(false);
        setBg4(true);
    }
    console.log(bg1,bg2,bg3,bg4);

   
}
  return (
   
    <div className={`w-[17vw] snw bg-[#ffffff] h-full flex flex-col anime fixed ${visible? "left-[0%]" : "left-[-60%]"} fixed z-[1000]`}>

       <div className="companylogo flex font-bold mx-auto mt-4 ">
        <h1 className='text-[2.3rem] text-[#d84646]'>Course</h1><span className='text-[2.3rem]'>Hub</span>
        </div>
       {/* <div className='w-full flex justify-center mt-[20%]'>
          <div className='flex items-center'>
            <img src={user} alt=""  className='w-[8rem] h-[8rem] rounded-full'/>
            <div className="text-center">
                <p>username</p>
                <p>email</p>
                <a href="">edit details</a>

                 
            </div>
            
          </div>
        </div> */}
        <div className='w-full flex flex-col justify-center items-center  mt-[8rem] '>
          <ul className='flex flex-col gap-4'>
          <NavLink  to="/" className={({isActive})=>` ${ isActive? "*:text-[red] *:after:right-[0%]" : "" }`} onClick={()=>{
            setBg1(true);
            setBg2(false);
            setBg3(false);
            setBg4(false);
          }}>
     
     <div className={`w-[12rem] bg-[#f8f6f6] py-2 px-2 after:right-[-7%] rounded-lg flex gap-5 sidebarnavbtn  items-center capitalize    `}  
    >
        <i className='fa-solid fa-house'></i>
    home
     </div>
   </NavLink>
   <NavLink  to="/courses" className={({isActive})=>` ${ isActive? "*:text-[red] *:after:right-[0%]" : "" }`} onClick={()=>{
            setBg1(false);
            setBg2(true);
            setBg3(false);
            setBg4(false);
          }}>
     
     <div className={`w-[12rem] bg-[#f8f6f6] py-2 px-2 after:right-[-7%] rounded-lg flex gap-5 sidebarnavbtn  items-center capitalize    `}  
    >
        <i className="fa-solid fa-book"></i>
      courses
     </div>
   </NavLink>
   <NavLink to="/library" className={({isActive})=>` ${ isActive? "*:text-[red] *:after:right-[0%]" : "" }`}  onClick={()=>{
            setBg1(false);
            setBg2(false);
            setBg3(true);
            setBg4(false);
          }}>
     
     <div className={`w-[12rem] bg-[#f8f6f6] py-2 px-2 after:right-[-7%] rounded-lg flex gap-5 sidebarnavbtn  items-center capitalize      `}  
    >
        <i className="fa-solid fa-book-bookmark"></i>
       library
     </div>
   </NavLink>
   <NavLink  to="/contact" className={({isActive})=>` ${ isActive? "*:text-[red] *:after:right-[0%]" : "" }`} onClick={()=>{
            setBg1(false);
            setBg2(false);
            setBg3(false);
            setBg4(true);
          }}>
     
     <div className={`w-[12rem] bg-[#f8f6f6] py-2 px-2 after:right-[-7%] rounded-lg flex gap-5 sidebarnavbtn  items-center capitalize   ${bg4? "text-[red] after:right-[0%]" : ""}`}  
    >
        <i className="fa-solid fa-envelope"></i>
       contact
     </div>
   </NavLink>
          </ul>
          </div>  


          <div className='mt-[2rem] mx-auto flex flex-col text-center'>
            <img src={illus2} alt="" className='w-[13rem]' />
            <p>
              Have a Doubt? 
            </p>
             <NavLink to="/contact" className="w-[6.3rem] bg-[red] text-white rounded-[5px] px-2 py-2 mx-auto mt-5  ">Contact US</NavLink>
          </div>
    </div>
    
  )
}

export default SideNavBar