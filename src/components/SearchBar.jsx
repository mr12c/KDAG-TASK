import React from 'react'
import {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setActivecCategory, setCategoryArray } from '../App/AppSlice'
import { useState } from 'react'
import { setSerchQuery } from '../App/AppSlice'
import { CiStar } from 'react-icons/ci'
import { RxCross2 } from "react-icons/rx";
import QueryWrapper from './QueryWrapper'
function SearchBar() {
  const dispatch=useDispatch()
  const category=[{title:"Business Managment",search:2000},{title:"Web Developer",search:1000},{title:"Ai",search:34000},{title:"machine Learning",search:2000},{title:"UI & UX",search:1800},{title:"Digital Marketing",search:1300},{title:"Consultant",search:3500},{title:"Prompt engineering",search:2500}]
  useEffect(()=>{
    dispatch(setCategoryArray(category))
  },[])
  const {activeCategory} = useSelector((state)=>state.AppSlice)
  const [query, setQuery] = useState();
  useEffect(()=>{
     setQuery(activeCategory)
  },[activeCategory])
  return (
    <div className='pt-4 ml-4'>
        <div className='relative flex items-center '>
             <i className='fa-solid fa-search absolute ml-4 text-[#fa7b7b]'></i>
            <input  onChange={(e)=>{setQuery(e.target.value) 
              setSerchQuery(query)
              dispatch(setActivecCategory(""))
              }} value={query} type="search" name="" id="" placeholder='Search by name or category' className='capitalize searchbar w-[20rem] pl-10 rounded-3xl py-3    '/>
        </div>
        <div className='flex flex-col gap-2 mt-8 nwdedo'>
          <div className='flex   "*:rounded-full *:text-nowrap *:border *:border-red-100  *:px-2 *:py-0.5 dark:text-red-400    *:rounded-full *:text-[0.8rem] gap-6 *:cursor-pointer'>
           {category.map((item,index)=> index<4? <div    className={`${activeCategory===item.title? " bg-[#e83232] text-[white] font-semibold": "bg-red-50"} flex items-center gap-2`}> <p onClick={()=>{dispatch(setActivecCategory(item.title))}}>{item.title}</p>{item.title===query? <i onClick={()=>{ 
          setQuery("")
          dispatch(setActivecCategory("")) 
          }} className='fa-solid fa-circle-xmark'></i> : ""}</div> : "")}
          </div>
          <div className='flex  *:text-[0.8rem] *:rounded-full *:border *:border-red-100 *:px-2 *:py-0.5 dark:text-red-400   rounded-full gap-5 *:cursor-pointer'>
          {category.map((item,index)=> index>=4 && index<7 ? <div  className={`${activeCategory===item.title? " bg-[red] text-[white] font-semibold": "bg-red-50"} flex items-center gap-2`}> <p onClick={()=>{dispatch(setActivecCategory(item.title))}} >{item.title}</p>{item.title===query? <i onClick={()=>dispatch(setActivecCategory(""))} className='fa-solid fa-circle-xmark'></i> : ""}</div> : "")}
          </div>
          <div  className='"*:rounded-full *:text-[0.8rem] *:cursor-pointer *:border *:border-red-100   *:px-2 *:py-0.5 dark:text-red-400  flex *:rounded-full  '>
          {category.map((item,index)=> index==7? <div  className={`${activeCategory===item.title? " bg-[red] text-[white] font-semibold": "bg-red-50"} flex items-center gap-2`}> <p onClick={()=>{dispatch(setActivecCategory(item.title))}}>{item.title}</p>{item.title===query? <i  onClick={()=>dispatch(setActivecCategory(""))} className='fa-solid fa-circle-xmark'></i> : ""}</div> : "")}
          </div>

        </div>

        <div className='w-[78vw] mt-[3rem]'>
          {<QueryWrapper query={query}/>}
        </div>
    </div>
  )
}

export default SearchBar