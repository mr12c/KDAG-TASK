import React from 'react'
import ContactForm from './ContactForm'
import { CiPen } from 'react-icons/ci'
import img from "../assets/contactill.jpg"
function Contact() {
  return (
    <div className='w-[82vw] min-h-[100vh]  bg-white'>
 <div>
      <div className='flex text-[2.2rem] items-center'><CiPen className='text-[red]'/><h1 className='text-black  text-[2.2rem] pl-3 pr-4 font-semibold'>Contact Page</h1></div>
 <hr  className='w-[30%]'/> 
 </div>
       <div className='flex'>
        <div className='w-[40%] h-[full] flex items-center justify-center mx-auto'><img src={img} alt="" /></div>
        <ContactForm/>
       </div>
    </div>
  )
}

export default Contact