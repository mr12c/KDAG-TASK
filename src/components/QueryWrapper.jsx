import React from 'react'
import { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import CourseCard from '../ui-components/CourseCard'
import { HashLoader, SyncLoader } from 'react-spinners'
function QueryWrapper({query}) {
  const url=`https://api.unsplash.com/search/photos?page=1&query=online&client_id=62JGTw61t2q9MRohVgd7bqiyses6OPviMSyuu8Q9Gao`
  let [imgs,setImg] = useState();
     useEffect(()=>{
      fetch(url).then((res)=>{
        return res.json()
      }).then((data)=>{console.log(data)
         return data.results
       
      }).then(data=>setImg(data[0])).catch((err)=>{console.log(err)})
     },[url])

   const {courses} = useSelector(state=>state.AppSlice)
   const results = (query) => {
    return courses.filter((item) =>
      item?.category?.toLowerCase().includes(query?.toLowerCase())
    );
  }
  
   const [result,setResult] = useState()
   useEffect(()=>{
     setResult(results(query))
   },[query])
 
  return (
    <div className='grid lg:grid-cols-5 w-[95%] gap-4 mx-auto mb-[9rem]'>
        {
          result?.length>0 && query?.length>0 ?   result?.map((item)=><CourseCard item={item} />) : <div className='w-[78vw] flex my-10 '><HashLoader className='rotate-[180deg] mx-auto' color="#ff0000" /></div>
        }
    </div>
  )
}

export default QueryWrapper