import React from 'react'

function Tooltips({content}) {
  return (
    <div className='tooltips absolute top-[-50%] px-2 rounded-full left-[-40%] py-1 text-[0.8rem] '>{content}</div>
  )
}

export default Tooltips