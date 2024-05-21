import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useState,useEffect } from 'react';
import { setdata } from '../App/AppSlice';
function DayWise({data}) {
     const [day,setDay] = useState(0);
     const [dayData,setDayData] = useState([]);
     const [data2,setData2] = useState();
     
     useEffect(()=>{setData2(data)
    console.log(data)},[data])
    //  const result = ()=>{
    //   let array;
    //   for(let i=0 ; i< data2?.content?.length();i++){
    //     for(let j=0; j < data2?.content[i].length();j++){
    //       array.push(data2?.content[i][j])
    //     }
    //   }
    //     return []
    //  }
     
  return (
    <>
    <div className=' flex flex-col gap-2 w-[30%]'>
      {data?.content[0]?.map((item,index)=>
      <div  onClick={()=>{setDay(index)}} className={`cursor-pointer  smb p-2 w-[60%]  ${day===index ? "hmb" : ""} justify-center rounded flex items-center gap-2 bg-red-50`}><i class="fa-solid fa-calendar-days"></i><div>Day {index+1}</div></div>
    )}
    </div>
    <div className='w-[50%] gap-2 flex flex-col *:rounded-lg'>
    <div className='p-2 smb hover:scale-[1.01]'>
           <p className='text-[1.2rem] font-semibold'>{data?.content[0][day]?.title}</p>
           <div className='flex justify-between items-center'><div className='capitalize text-[0.9rem]'>duration: <span>{data?.content[0][day]?.duration}</span></div> {data?.content[0][day]?.assignment? <div className='px-2 bg-red-500 text-[white] rounded'>Assignment</div> : ""}</div>
    </div>
    </div>
    </>
  )
}

export default DayWise