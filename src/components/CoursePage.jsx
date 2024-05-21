import React from 'react'
import { useEffect,useState } from 'react'
import TutorsDetails from '../ui-components/TutorsDetails'
import FrequentlyAskedQuestion from '../ui-components/FrequentlyAskedQuestion'
import CatBtn from '../ui-components/CatBtn'
import Tooltips from '../ui-components/Tooltips'
import {useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { setlike } from '../App/AppSlice'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
function CoursePage({params}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let dispatch = useDispatch()
  let courseId="0pzD80op9qM-kyk9YBPzw";
  let {courses,courseImg} = useSelector(state=>state.AppSlice)
  const [data,setData] = useState();
  let {id} = useParams();
  const findCourse = (id)=>{
    return courses.filter((item)=> item.id===id);
  }
  useEffect(()=>{
setData(findCourse(id)[0])
  },[id])
   
  const title="coding"
  const [like,setLike] = useState(false);
  useEffect(()=>{setLike(prev=>!prev)},[data?.isLiked])
  const url=`https://api.unsplash.com/search/photos?page=1&query=python&client_id=62JGTw61t2q9MRohVgd7bqiyses6OPviMSyuu8Q9Gao`
let [imgs,setImg] = useState();
   useEffect(()=>{
    fetch(url).then((res)=>{
      return res.json()
    }).then((data)=>{console.log(data)
      setImg(data.results)
     
    }).catch((err)=>{console.log(err)})
   },[url])
  return (
    <div className="w-[82vw] onw mx-auto min-h-[100vh] bg-white pl-6 pt-8"> 
        <NavLink to="/courses"><div className='w-[2rem] h-[2rem] bg-[black] mb-3 rounded-full flex justify-center items-center'><i className='fa-solid fa-arrow-left text-[white]'></i></div></NavLink>
      <div><h1 className='text-[1.9rem] font-semibold'>Course Details</h1></div>
    <div className='flex coursedetailcontainer'>
    <div className='w-[80%] cdetfe '>
      <div className='w-[90%] h-[34%] rounded-3xl overflow-hidden'>
     {courseImg?  <img src={courseImg}></img> : <div className='w-full h-full bg-slate-300'></div>  }
      </div>
      <div>
        <h1 className='text-[2rem] mt-8 font-semibold courseTitle text-[#030303]'>{data?.title}</h1>
        <p className='w-[60%] text-[0.9rem] mt-2 cparanw capitalize font-semibold text-[#757575]'>{data?.description}</p>
        <div className='flex *:px-4 *:py-1 *:rounded-md gap-8 mt-14 st1'>
           <div className='tcd  flex flex-col  '>
               <div className='flex items-center gap-2 text-[0.9rem] text-[#818080]'> <div className='w-8 h-8 bg-red-100 rounded-full flex justify-center items-center '><i className='fa-solid fa-calendar-days   text-[1.2rem] text-[red]'></i></div>Start Date</div>
               <p className='text-right font-bold text-[0.9rem]'>28 jan, 2023</p>
           </div>
           <div className='tcd flex flex-col '>
               <div className='flex items-center  gap-2 text-[0.9rem] text-[#2c2c2c93]'> <div className='w-8 h-8 bg-red-100 rounded-full flex justify-center items-center'><i className='fa-solid fa-calendar-days   text-[1.2rem] text-[red]'></i></div>Start Date</div>
               <p className='text-right font-bold text-[0.9rem]'>28 jan, 2023</p>
           </div>
           <div className="mybtn230">
            <CatBtn title={"view course"} path={"/course Content"} id={data?.id}></CatBtn>
           </div>
           <div className='cursor-pointer relative heart ' onClick={()=>{setLike(prev=>!prev)}}>
            <Tooltips content={`${!like? "add to favourite" : "favourite"}`}/>
            <i  onClick={()=>{
              
              dispatch(setlike(id))}} className={`fa-solid fa-heart  text-[1.8rem] ${like? "text-[red]" :"text-[#abaaaa]"}`}></i></div>
        </div>
        <div className="details flex gap-20 mt-10 *:flex *:flex-col *:justify-center *:items-center *:gap-5 *:text-[1.4rem] e0j039ndwon">
             <div >
               <div className='w-[5rem] h-[5rem] bg-red-50 rounded-full flex justify-center items-center'><i className='fa-solid fa-video text-[2rem] text-[#f95a5a]'></i></div>
              <p>{data?.videoLec} videos </p>
             </div>
             <div> 
               <div className='w-[5rem] h-[5rem] bg-red-50 rounded-full flex justify-center items-center'>
               <i className='fa-solid fa-book text-[2rem] text-[#fe5252]'></i>
               </div>
               
              <p>{data?.assignment} assisngment</p>
             </div>
             <div>
            <div className='w-[5rem] h-[5rem] bg-red-50 rounded-full flex justify-center items-center'>
            <i className='fa-solid fa-computer text-[2rem] text-[red] '></i>
            </div>
              <p>{data?.mockTest}+ test</p>
             </div>
        </div>
  <div className='flex flex-col gap-10 capitalize mt-10'>
     <div className='flex *:flex gap-8'>
            <div className='flex gap-4'>
               <div className='w-6 h-6 rounded-full bg-red-100 flex justify-center items-center'><i className='fa-solid fa-check  text-[red]'></i></div> <h1 className='text-[1.2rem] font-semibold'>world class</h1>
            </div>
            <div className='flex gap-4'>
               <div className='w-6 h-6 rounded-full bg-red-100 flex justify-center items-center'><i className='fa-solid fa-check text-[red]'></i></div> <h1 className='text-[1.2rem] font-semibold'>flexible</h1>
            </div>
     </div>
     <div className='flex *:flex gap-8'>
            <div className='flex gap-4'>
               <div className='w-6 h-6 rounded-full bg-red-100 flex justify-center items-center'><i className='fa-solid fa-check text-[red]'></i></div> <h1 className='text-[1.2rem] font-semibold'>gurantted job</h1>
            </div>
            <div className='flex gap-4'>
               <div className='w-6 h-6 rounded-full bg-red-100 flex justify-center items-center'><i className='fa-solid fa-check text-[red]'></i></div> <h1 className='text-[1.2rem] font-semibold'>Affordable</h1>
            </div>
     </div>
  </div>


      <TutorsDetails/>



      
       </div>
      </div>
      <div>
          <FrequentlyAskedQuestion/>
      </div>
    </div>
      
      
    </div>
  )
}

export default CoursePage;  