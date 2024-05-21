import React from 'react'
import CourseCard from './CourseCard'

function LikeCourseWrapper({title,data}) {
  return (
    <div className='w-full mt-4'>
    <div className=' text-[1.7rem] capitalize ml-8 mb-4'><h1>{title}</h1></div>
     <div className='grid w-[90%] mx-auto sm:grid-col-2 lg:grid-cols-5 gap-4 lcwn'>
    
      {data?.map((item)=><CourseCard item={item}></CourseCard>)}
  </div>

  </div>
  )
}

export default LikeCourseWrapper