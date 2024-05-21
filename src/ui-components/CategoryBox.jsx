import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState,useEffect } from 'react';
import { CiStar } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { setCategoryArray } from '../App/AppSlice';
import { setActivecCategory } from '../App/AppSlice';

function categoryBox({title,search}) {
  const dispatch= useDispatch()
  const url=`https://api.unsplash.com/search/photos?page=1&query=${title}&client_id=62JGTw61t2q9MRohVgd7bqiyses6OPviMSyuu8Q9Gao`
    let [imgs,setImg] = useState();
       useEffect(()=>{
        fetch(url).then((res)=>{
          return res.json()
        }).then((data)=>{console.log(data)
           return data.results
         
        }).then((data)=>{setImg(data[5])}).catch((err)=>{console.log(err)})
       },[url])
  return (
     <div className='rounded-lg overflow-hidden w-[95%] catbox2 flex flex-col justify-between'>
      <img src={imgs?.urls.raw} alt="" className=' w-full'/>
      <div className='mt-4  mb-4'>
         <div className='pl-2'> <p className='text-[black] font-semibold'>{title}</p>
         <p className="text-[0.7rem]">Lorem ipsum dolor sit amet.</p></div>
           <div className='flex justify-between items-center bg px-2'><NavLink  onClick={()=>{dispatch(setActivecCategory(title))}} to="/courses" className="p-2 mt-4 inline-block capitalize bg-[#0b0b0b] hover:scale-[1.03] rounded-lg font-medium text-[white]">
            check Out
          </NavLink> <p className='flex items-center justify-center  gap-2'> <span className='mt-[22%] '> {search}+ search</span><CiStar className='bg-[#ff0000] [font-bold rounded-full text-[1.4rem] mt-8'/></p> </div>
      </div>
     </div>
  )
}

export default categoryBox