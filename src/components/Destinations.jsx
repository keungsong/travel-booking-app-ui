import React from 'react'
import Kuagsi from '../assets/kuagsi.jpg'
import Kuagsi01 from '../assets/kuasi01.jpg'
import Kuagsi02 from '../assets/kuasi02.jpg'
import Kuagsi03 from '../assets/kuagsi03.jpg'
import Kuagsi04 from '../assets/kuagsi04.jpg'


export const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>ຮ່ວມແຫຼ່ງທ່ອງທ່ຽວ</h1>
        <p className='py-3'>ແຫຼ່ງທ່ອງທ່ຽວທີ່ງົດງານ ແລະ ໜ້າທ່ຽວໃນລາວ</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
             <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Kuagsi} alt="/" />
             <img className='w-full h-full object-cover' src={Kuagsi01} alt="" />
             <img className='w-full h-full object-cover' src={Kuagsi02} alt="" />
             <img className='w-full h-full object-cover' src={Kuagsi03} alt="" />
             <img className='w-full h-full object-cover' src={Kuagsi04} alt="" />
        </div>
    </div>
  )
}
