import React from 'react'
import { CiLaptop } from 'react-icons/ci'
import img from '../assets/5294.jpg'
import Wrapper from '../ui-components/Wrapper'
import CourseWrapper from '../ui-components/CourseWrapper'
import { CiHeart } from 'react-icons/ci'
import LikeCourseWrapper from '../ui-components/LikeCourseWrapper'
import { useSelector } from 'react-redux'
import { useState,useEffect } from 'react'

function Library() {
  const [likedCourse,setLikedCourse]=useState([]);
  const {courses} = useSelector(state=>state.AppSlice)
  const findResult=()=>{
    return courses.filter((item)=> item.isLiked==true);
  }

  useEffect(()=>{
    setLikedCourse(findResult());
  },[courses])

  return (
    <div className='w-[82vw] onw min-h-[100vh] bg-white'>
      <div className='pt-4'>
        <div className='flex items-center gap-2 text-[2rem] font-semibold ml-4'><CiLaptop className='text-[red]'></CiLaptop> <h1>library</h1></div>
        <hr  className='w-[30%]'/>
        <div className='w-[50%] h-[50%] libimg mx-auto'> 
          <img src={img} alt="" />
        </div>
      </div>
      <div className='mb-10'>
         <div><h1 className='text-[1.7rem]  capitalize font-medium ml-4 '>continue your learning</h1>

         <hr  className='w-[30%] hrnwidth font-bold h-[2px] bg-[#1b1b1b] mb-10'/></div>
         <CourseWrapper />
      </div>
      <div className='mb-10 mt-20'>
         <div> <div className='flex items-center'><CiHeart className='text-[1.7rem] text-[red] ml-4'/> <h1 className='text-[1.7rem]  capitalize font-medium ml-4 '>liked course</h1>
</div>
         <hr  className='w-[30%] font-bold h-[1px] bg-[#1b1b1b] mb-10'/>
         </div>
         {likedCourse?.length==0? <div className='text-black text-[2rem] text-center'>like a course first</div> : <LikeCourseWrapper data={likedCourse}/>  }
      </div>
    </div>
  )
}

export default Library