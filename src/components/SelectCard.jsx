import React from 'react'


export const SelectCard = (props) => {
  return (
    <div className='relative'>
    <img className='w-full h-full object-cover' src={props.bg} alt="" />
    <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full '>
          <p className='left-4 bottom-10 text-xl font-bold text-white absolute'>
           {props.text}</p>
           <p className='left-4 bottom-2 text-xl font-bold text-white absolute'>
           { props.p}</p>
    </div>
</div>
  )
}
