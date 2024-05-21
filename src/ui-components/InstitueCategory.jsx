import React from 'react'
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BiSolidInstitution } from 'react-icons/bi';
function InstitueCategory({item,index}) {
  const { instituteCurrentPage} = useSelector(state=>state.AppSlice)
    const url=`https://api.unsplash.com/search/photos?page=${instituteCurrentPage}&query=indian college&client_id=62JGTw61t2q9MRohVgd7bqiyses6OPviMSyuu8Q9Gao`
    let [imgs,setImg] = useState();
       useEffect(()=>{
        fetch(url).then((res)=>{
          return res.json()
        }).then((data)=>{
           return data.results
         
        }).then((data)=>setImg(data[index])).catch((err)=>{console.log(err)})
       },[url])
  return (
    <div className=' bg-[#ebebeb8b] p-2 rounded-lg hover:scale-[1.01] cursor-pointer'>
       <div className='rounded-lg overflow-hidden w-[full]  h-[13rem] imgdiv items-center'>  <img src={imgs?.urls.regular} alt=""  className='w-full h-full bc'/></div>
        <div className='py-1'>
             <div className='flex  items-center gap-2 '><BiSolidInstitution className='mt-3'/><h1 className='text-[#282727] text-[0.9rem] mt-3'>{item.instituteName}</h1></div>
            <p className='font-semibold text-[1.1rem] mt-2'>{item.course}</p>
        </div>
        <div><p className='text-[0.8rem] text-[#343333]'>{item.duration}</p></div>
    </div>
  )
}

export default InstitueCategory;