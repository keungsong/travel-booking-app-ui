import React from 'react'
import Hotel01 from '../assets/hotel01.jpg'
import Hotel02 from '../assets/hotel02.jpg'
import Hotel03 from '../assets/hotel03.jpg'
import Hotel04 from '../assets/hotel04.jpg'
import Hotel05 from '../assets/hotel05.jpg'
import Hotel06 from '../assets/hotel06.jpg'
import { SelectCard } from './SelectCard'
import {AiOutlineSearch} from 'react-icons/ai'

export const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2
     lg:grid-cols-3 gap-4'>
       <SelectCard bg={Hotel01} text='ຊື່ໂຮງແຮມ 01' p='luangparbang'/>
       
       <SelectCard bg={Hotel02} text='ຊື່ໂຮງແຮມ 02' p='luangparbang'/>
       <SelectCard bg={Hotel03} text='ຊື່ໂຮງແຮມ 03' p='luangparbang'/>
       <SelectCard bg={Hotel04} text='ຊື່ໂຮງແຮມ 04' p='luangparbang'/>
       <SelectCard bg={Hotel05} text='ຊື່ໂຮງແຮມ 05' p='luangparbang'/>
       <SelectCard bg={Hotel06} text='ຊື່ໂຮງແຮມ 06' p='luangparbang'/>
        
     </div>
  )
}
