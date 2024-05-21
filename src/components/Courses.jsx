import React from 'react'
import SearchBar from './SearchBar'
import CourseWrapper from '../ui-components/CourseWrapper'
import QueryWrapper from './QueryWrapper'

function Courses() {
  return (
    <div className='w-[82vw] onw min-h-[100vh] bg-white'>
      <SearchBar/>
     


      <CourseWrapper title="courses on python">
        
      </CourseWrapper>
    </div>
  )
}

export default Courses