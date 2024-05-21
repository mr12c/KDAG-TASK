import React from 'react'
import m1 from "../assets/m1.jpg"
import { NavLink } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCourseImg } from '../App/AppSlice'
function CourseCard({item}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const url=`https://api.unsplash.com/search/photos?page=${item?.index+1}&query=${item?.category}&client_id=62JGTw61t2q9MRohVgd7bqiyses6OPviMSyuu8Q9Gao`
  let [imgs,setImg] = useState();
     useEffect(()=>{
      fetch(url).then((res)=>{
        return res.json()
      }).then((data)=>{console.log(data)
         return data.results
       
      }).then(data=>setImg(data[item?.index])).catch((err)=>{console.log(err)})
     },[url])
  return (
    <div className='rounded-lg overflow-hidden course-card hover:scale-[1.02]'>
       <div className='flex justify-center items-center'>  <img src={imgs?.urls.regular} alt="" className='h-[9rem] w-full' /></div>
        <div className='p-2'>
        <div className='flex "*:rounded-full *:border *:border-red-100 *:bg-red-50 *:px-1 *:py-0.5 dark:text-red-400    *:rounded-full *:text-[0.8rem] gap-2 *:cursor-pointer mt-2'>
             
              <div className='capitalize'>{item?.category}</div>
        </div>
         
        <div className='mt-2 mb-3 flex flex-col gap-1'>
            <div className='text-[0.7rem]'>
                 <span className='text-[red] font-bold'>{item?.noOfStudentsEnrolled}k+</span> students enrolled
            </div>
            <div className='text-[0.7rem]'>
                <span className='text-[red] font-bold'>Experienced</span> tutors
            </div>
            <div className='text-[0.7rem]'>
                <span className='text-[red] font-bold capitalize'>industry</span> best guidence
            </div>
            <div className='text-[0.7rem]'>
                <span className='text-[red] font-bold capitalize'>{item?.noOfHappyLearners}k+</span> Happy Learner
            </div>

        </div>
        <div className='flex justify-between'>
        <div>
        <i class="fa-solid fa-dollar-sign"></i><span className='font-bold ml-1'>{item?.price}</span>
        </div>
        <NavLink onClick={()=>{navigate(`/${item?.id}`)
            dispatch(setCourseImg(imgs?.urls.regular))
    }} className="bg-[#cf4242] rounded-full px-2 py-1 text-[white] flex items-center gap-3 font-semibold ]">
                Explore
                <span className='w-5 h-5 flex justify-center items-center bg-[white] rounded-full'><i className='fa-solid fa-arrow-right text-black'></i></span>
        </NavLink>
        </div>

        </div>
    </div>
  ) 
}

export default CourseCard