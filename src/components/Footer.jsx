import React from 'react'
import {FaFacebook,FaYoutube,FaTiktok} from 'react-icons/fa'
export const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
            <div className='sm:flex text-center justify-between items-center'>
                <h1>ທ່ຽວລາວ.</h1>
                <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                <FaFacebook className='icons'/>
                <FaYoutube className='icons'/>
                <FaTiktok className='icons'/>
                </div>
            </div>
            <div className='flex justify-between'>
                <ul className='lg:flex'>
                    <li>ກ່ຽວກັບພວກເຮົາ</li>
                
              
                    <li>ຄຸ່ຮ່ວມງານ</li>
                
            
                    <li>ຫ້ອງໃຫມ່</li>
               
                    <li>ໂຄສະນາ</li>
                </ul>
                <ul className='text-right lg:flex'>
                  <li>ໜ້າຫຼັກ</li>
                  <li >ປາຍທາງ</li>
                  <li >ແຫຼ່ງທ່ອງທ່ຽວ</li>
                  <li >ຢ້ຽມຢາມ</li>
                  <li >ການຈ່ອງ</li>
                </ul>
               
               
             
               
                
            </div>
            
            <div>
                <p className='border-b text-left pt-16 pb-2 '>copyright&copy;2022</p>
            </div>
        </div>
    </div>
  )
}
