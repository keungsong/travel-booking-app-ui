import React from 'react'
import beachVid from '../assets/beachVid.mp4'
import {AiOutlineSearch} from 'react-icons/ai'

export const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <video className='w-full h-full object-cover' src={beachVid} autoPlay loop muted></video>
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'>

        </div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
          <h1>ຄົ້ນຫາສະຖານທີທີ່ທ່ານຕ້ອງການທ່ຽວ</h1>
          <h2 className='py-4'>ແຫຼ່ງທ່ອງທ່ຽວໃນລາວ</h2>
          <form className='flex justify-between items-center max-w-[700px] 
           mx-auto w-full border p-1 rounded-md
          text-black bg-gray-100/90'>
            <div>
              <input className='bg-transparent w-[300px] sm:w-[400px] focus:outline-none' 
              type="text" placeholder='ຄົ້ນຫາສະຖານທີ່ທ່ອງທ່ຽວ' />
            </div>
            <div>
              <button><AiOutlineSearch size={20} className='icons' style={{color:'#ffffff'}}/></button>
            </div>
            
          </form>
        </div>

    </div>
  )
}
