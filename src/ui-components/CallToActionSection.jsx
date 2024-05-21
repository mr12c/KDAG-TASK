import React from 'react'
import { NavLink } from 'react-router-dom'

function CallToActionSection({img,title1,title2,btnTitle}) {
  return (
    <div className='flex w-[90vw] mx-auto '>
        <img src={img} className='w-[43%] h-[25vw]' />
        <div className='mt-10'>
        <div className='flex flex-col gap-5'>
            <h1 className='text-[2.4rem] font-semibold'>We offer <span className="text-[red] uppercase">best</span> and <span className='capitalize text-[red]'> organized</span> <br />content</h1>
            <h2 className='text-[0.9rem] capitalize w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolores!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, reprehenderit.</h2>
           
        </div>
        <NavLink className="bg-[#cf4242] w-[7.5rem] mt-[6%] rounded-full group px-2 py-2 hover:scale-[1.02] text-[white] flex items-center  justify-center gap-3 font-semibold text-[1.2rem]">
                Explore
                <span className='w-5 h-5 flex justify-center items-center bg-[white] rounded-full '><i className='fa-solid fa-arrow-right text-black'></i></span>
        </NavLink>
        </div>
    
    </div>
  )
}

export default CallToActionSection