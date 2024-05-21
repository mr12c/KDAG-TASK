import React from 'react'

import CourseCard from './CourseCard'
import { useSelector } from 'react-redux'
import { useEffect,useState } from 'react'

function CourseWrapper({title}) {
  const {courses} = useSelector((state)=>state.AppSlice)
  const [data,setData]=useState()
  const results=()=>{
    return courses.filter((item)=>item?.category?.toLowerCase().includes("machine learning"))
  }
  useEffect(()=>{
    setData(results)
  })
  return (
    <div className='w-full mt-4'>
      <div className=' text-[1.7rem] capitalize ml-8 mb-4'><h1>{title}</h1></div>
       <div className='grid w-[90%] mx-auto sm:grid-col-2 lg:grid-cols-5 gap-4'>
      
        {data?.map((item)=><CourseCard item={item}></CourseCard>)}
    </div>

    </div>
  )
}

export default CourseWrapper