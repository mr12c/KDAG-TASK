import React, { useEffect } from 'react'
import FrequentlyAskedQuestion from '../ui-components/FrequentlyAskedQuestion'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import DayWise from './DayWise'
import { useState } from 'react'
import WeekWise from './WeekWise'
import { useSelector } from 'react-redux'

function CourseContentPage() {
 const navigate = useNavigate();
  const [data,setData] = useState();
 let courseId="0pzD80op9qM-kyk9YBPzw";
 let  {course_id} = useParams();
 console.log(course_id);
 console.log(course_id[26]);
 let [content,setContent]  = useState(true);
 let {courses} = useSelector(state=>state.AppSlice)
 const find = ()=>{
    return courses?.filter((item)=>item.id===course_id)
 }
 useEffect(()=>{
    setData(find()[0])
 },[course_id])

  return (
    <div className='w-[82vw] flex bg-white'>
        <div className='w-[70%] min-h-[100vh] '>
            <div className='mt-8'>
            <div>
            <div>
                    <h1 className='ml-2 text-[1.1rem] font-medium'>Subjects</h1>
                    <hr className='bg-[#090909] w-[20%] h-[1.8px]'/>

                 </div>
                 <div className='flex gap-8 pl-4 mt-6'>
                        {data?.subjects.map((item)=>
                     <div className='p-[1rem] rounded-md flex flex-col justify-center items-center gap-3 bg-red-50'>
                         <div className='w-7 h-7 bg-red-100 rounded-full flex justify-center items-center'><i className='fa-solid fa-code text-[red]'></i></div>
                         <div>
                             <h1 className='capitalize text-[0.9rem] text-nowrap'>{item}</h1>
                         </div>
                     </div>
                    )}
                        
                 </div>
            </div>
            <div>
                <div className='mt-8'>
                    <h1 className='ml-2 font-medium'>Assisgnment</h1>
                    <hr className='bg-[#111111] w-[20%] h-[1.7px]'/>
                </div>
                <div className='w-[6rem] ml-4 mt-8 h-[6rem] bg-red-50 flex justify-center items-center rounded'>
                    <div>
                        <div className='flex flex-col justify-center items-center'> <div className='h-[1.8rem] w-[1.8rem] rounded-full justify-center flex items-center bg-red-100 text-[red]'><i className='fa-solid fa-book'></i></div></div><h1>Pdfs</h1>
                    </div>

                </div>
            </div>
            <div className='mt-10'>
                <div>
                    <h1 className='ml-2 font-medium'>Mock Test</h1>
                    <hr className='bg-[#010101] w-[20%] h-[1.6px]'/>
                </div>
                <div className=' flex'>
                    <div className='p-[1.1rem] bg-red-50 mt-4 ml-4'>
                        <div><div className='w-10 h-10 flex justify-center items-center bg-red-100  rounded-full text-[red] '><i className='fa-solid fa-laptop'></i></div></div><h1>tests</h1>
                    </div>
                </div>
            </div>
                
            </div>
            <hr className='mt-4 bg-[black] h-[1.5px]'/>
            <div className='flex flex-col'> 
                <div className='flex justify-end mt-4'>
                      <div className={`px-2 relative py-1 rounded-full bg-red-100 flex gap-6 after:w-[50%] after:h-[90%] after:translate-y-[5%] after:left-[2%] after:absolute after:bg-[#f23f3f] after:top-0 after:rounded-full cursor-pointer ${content? "after:left-[48%]":"after:left-[2%]"} `} onClick={()=>setContent(prev=>!prev)}>
                        <h1 className='font-medium'>Day</h1>
                        <h2 className='font-medium'>Week</h2>
                      </div>

                </div>
                 <div className='flex justify-between p-4'>
                    
                    
                      {content? <DayWise data={data}/> : <WeekWise data={data}/>}
            
                    
                   
                 </div>
            </div>
             
        </div>
        <div><FrequentlyAskedQuestion/></div>
    </div>
  )
}

export default CourseContentPage