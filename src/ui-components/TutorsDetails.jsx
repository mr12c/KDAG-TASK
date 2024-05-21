import React from 'react'
import {useState,useEffect} from "react";
function TutorsDetails() {
    const url=`https://api.unsplash.com/search/photos?page=3&query=user&client_id=62JGTw61t2q9MRohVgd7bqiyses6OPviMSyuu8Q9Gao`
let [imgs,setImg] = useState();
   useEffect(()=>{
    fetch(url).then((res)=>{
      return res.json()
    }).then((data)=>{console.log(data)
      setImg(data.results)
     
    }).catch((err)=>{console.log(err)})
   },[url])
  return (
    <div className='w-[60%] mt-10  '>
        <h1 className='text-[1.4rem] font-medium'>Tutors</h1>
        <div className='grid lg:grid-cols-5 gap-20 mt-10'>
            {imgs?.map((item,index)=> index<5? <div className={`${item? "":""} w-[6vw] h-[6vw]  rounded-full overflow-hidden bg-slate-400`}><img src={item.urls.full} alt="" className="tutorprofile w-full h-full scale-[1.5]" /></div> : "" )}
        </div>
    </div>

  )
}

export default TutorsDetails