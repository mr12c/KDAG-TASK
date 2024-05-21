import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import {useState,useEffect } from 'react'

function WeekWise({data}) {
    const navigate = useNavigate();
    let [currentWeak,setCurrentWeak] = useState(0);
  return (
    <> 
    <div className='flex flex-col gap-2 w-[30%]'>
        {data?.content.map((item,index)=> 
         <div  onClick={()=>{setCurrentWeak(index)}} className={`cursor-pointer wei9j309uj20  smb p-2 w-[60%]  ${currentWeak===index ? "hmb" : ""} justify-center rounded flex items-center gap-2 bg-red-50`}><i class="fa-solid fa-calendar-days"></i><div>Week {index+1}</div></div>
      )}
    </div> 
    <div className='w-[50%] gap-2 flex flex-col *:rounded-lg'>
        {data?.content[currentWeak].map((item)=> <div className='p-2 smb hover:scale-[1.01] w0390dokdj'>
           <p className='text-[1.2rem] font-semibold'>{item?.title}</p>
           <div className='flex justify-between items-center'><div className='capitalize text-[0.9rem]'>duration: <span>{item.duration}</span></div> {item.assignment? <div className='px-2 bg-red-500 text-[white] rounded'>Assignment</div> : ""}</div>
        </div>)}
    </div>
    </>
  )
}

export default WeekWise