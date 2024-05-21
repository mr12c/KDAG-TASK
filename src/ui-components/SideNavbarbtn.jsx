import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';

function SideNavbarbtn({title,index}) {
    let [icon , setIcon] = useState();
    useEffect(()=>{
        if(title==="home"){
            seti(index)
            setIcon("fa-solid fa-house")
        }
        else if(title==="courses"){
            seti(index)
            setIcon("fa-solid fa-book")
        }
        else if(title==="contact"){
            seti(index)
            setIcon("fa-solid fa-envelope")
        }
        else if(title==="my library"){
            seti(index)
            setIcon("fa-solid fa-book-bookmark")
        }
    },[])
   let [bg1,setBg1] = useState();
   let [bg2,setBg2] = useState();
   let [bg3,setBg3] = useState();
   let [bg4,setBg4] = useState();
   let [i ,seti] = useState();
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
       
   }
  return (
   <NavLink    onClick={handleOnClick}>
     
     <div className={`w-[10rem] bg-[#f8f6f6] py-2 px-2 after:right-[-7%] rounded-lg flex gap-3 sidebarnavbtn  items-center capitalize ${index==0 && bg1? "text-[red] after:right-[0%]" : "" }  ${index==1 && bg2? "text-[red] after:right-[0%]" : ""} ${index==2 && bg3? "text-[red] after:right-[0%]" : ""} ${index==3 && bg4? "text-[red] after:right-[0%]" : ""}`}  
    >
        <i className={icon}></i>
       {title}
     </div>
   </NavLink>
  )
}

export default SideNavbarbtn