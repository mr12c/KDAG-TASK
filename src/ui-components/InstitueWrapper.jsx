import React from 'react'
import InstitueCategory from './InstitueCategory'
import Page from './Pagination'
import { useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
function InstitueWrapper() {
    const data = [
         [        { instituteName: "Indian Institute of Technology Bombay", course: "B.Tech in Computer Science", duration: "4 years" },
         { instituteName: "Indian Institute of Technology Delhi", course: "M.Tech in Electrical Engineering", duration: "2 years" },
         { instituteName: "Indian Institute of Technology Kanpur", course: "Ph.D. in Mechanical Engineering", duration: "5 years" },
         { instituteName: "Indian Institute of Technology Kharagpur", course: "M.Sc. in Physics", duration: "2 years" },
         { instituteName: "Indian Institute of Technology Madras", course: "B.Tech in Civil Engineering", duration: "4 years" },
         { instituteName: "Indian Institute of Technology Roorkee", course: "MBA", duration: "2 years" }],
        [ { instituteName: "Indian Institute of Technology Guwahati", course: "B.Tech in Chemical Engineering", duration: "4 years" },
        { instituteName: "Indian Institute of Technology Hyderabad", course: "M.Tech in Computer Science", duration: "2 years" },
        { instituteName: "Indian Institute of Technology Indore", course: "B.Tech in Electrical Engineering", duration: "4 years" },
        { instituteName: "Indian Institute of Technology BHU (Varanasi)", course: "M.Sc. in Chemistry", duration: "2 years" },
        { instituteName: "Indian Institute of Technology Patna", course: "Ph.D. in Computer Science", duration: "5 years" },
        { instituteName: "Indian Institute of Technology Ropar", course: "B.Tech in Mechanical Engineering", duration: "4 years" }],

        [ { instituteName: "Indian Institute of Technology Gandhinagar", course: "M.Tech in Civil Engineering", duration: "2 years" },
        { instituteName: "Indian Institute of Technology Jodhpur", course: "M.Sc. in Mathematics", duration: "2 years" },
        { instituteName: "Indian Institute of Technology Bhubaneswar", course: "B.Tech in Metallurgical Engineering", duration: "4 years" },
        { instituteName: "Indian Institute of Technology Mandi", course: "M.Tech in Mechanical Engineering", duration: "2 years" },
        { instituteName: "Indian Institute of Technology Tirupati", course: "B.Tech in Electrical Engineering", duration: "4 years" },
        { instituteName: "Indian Institute of Technology Palakkad", course: "M.Tech in Chemical Engineering", duration: "2 years" }],
        

         
        [ { instituteName: "Indian Institute of Technology Dhanbad (ISM)", course: "Ph.D. in Mining Engineering", duration: "5 years" },
        { instituteName: "Indian Institute of Technology Bhilai", course: "B.Tech in Computer Science", duration: "4 years" },
        { instituteName: "Indian Institute of Technology Goa", course: "M.Tech in Electrical Engineering", duration: "2 years" },
        { instituteName: "Indian Institute of Technology Jammu", course: "B.Tech in Mechanical Engineering", duration: "4 years" },
        { instituteName: "Indian Institute of Technology Dharwad", course: "M.Sc. in Physics", duration: "2 years" }]
      ];

      const { ref, inView } = useInView({
        triggerOnce: true, // Ensure animation happens only once when it comes into view
        threshold: 0.1, // Trigger when 10% of the element is in view
      });
      const [page,setPage] = useState()
    const {instituteCurrentPage} =useSelector(state=>state.AppSlice)
    useEffect(()=>{
        setPage(instituteCurrentPage)
        console.log(page)
    },[instituteCurrentPage])
  
  return (
    <div className='w-[95%] mx-auto flex flex-col mt-[5rem]'>
        <h1 className='text-center text-[2rem] font-semibold mt-[1rem] text-[#000000] pb-10 capitalize'>Courses Offer from top Institute</h1>
        <motion.div   
        className='w-full grid lg:grid-cols-3 intiswiper gap-6'> 
          {data[instituteCurrentPage-1]?.map((item,index)=> <InstitueCategory item={item} index={index}></InstitueCategory>)}
           
        </motion.div>
        <div className='flex justify-center mt-10'><Page totalPages={4}/></div>
    </div>
  )
}

export default InstitueWrapper