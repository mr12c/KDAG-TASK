import React from 'react'
import CategoryBox from './CategoryBox'
import { useSelector } from 'react-redux'
function Wrapper() {
  const category=[{title:"Business Managment",search:2000},{title:"Web Developer",search:1000},{title:"Ai",search:34000},{title:"machine Learning",search:2000},{title:"UI & UX",search:1800},{title:"Digital Marketing",search:1300},{title:"Consultant",search:3500},{title:"Prompt engineering",search:2500}]
  return (
    <div className='mt-[1rem]'>
        <h1 className='text-[2rem] ml-10'>Course Category</h1>
        <div className=' grid lg:grid-cols-4 sm:grid-cols-2 mx-auto  gap-x-2 gap-y-8  w-[90%] mt-[2rem]' >
            {category.map((item)=> <CategoryBox title={item.title} search={item.search}/>)}
        </div>
    </div>
  )
}

export default Wrapper