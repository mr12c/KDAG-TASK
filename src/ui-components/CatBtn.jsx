import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function CatBtn({title,path,id}) {
  const navigate = useNavigate();
  return (
    <NavLink onClick={()=>{navigate(`/course/${id}`)}} className="bg-[#cf4242] rounded-full ewoj393-kl px-2 py-1 text-[white] flex items-center gap-3 font-semibold ]">
    {title}
    <span className='w-5 h-5 flex justify-center items-center bg-[white] rounded-full'><i className='fa-solid fa-arrow-right text-black'></i></span>
    </NavLink>
  )
}

export default CatBtn