import React ,{useState}from 'react'

import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook,FaYoutube,FaTiktok} from 'react-icons/fa'
import {MdGTranslate} from 'react-icons/md'

export const Navbar = () => {
  const [nav,setNav] = useState(false);
  const [logo,setLogo] = useState(false);
  const handleNav = () =>{
    setNav(!nav);
    setLogo(!logo)
  }
  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
        <div >
           <h1 onClick={handleNav} className={logo ? 'hidden': 'block'}>ທ່ຽວລາວ.</h1>
        </div>
        <ul className='hidden md:flex font-bold'>
            <li>ໜ້າຫຼັກ</li>
            <li>ປາຍທາງ</li>
            <li>ແຫຼ່ງທ່ອງທ່ຽວ</li>
            <li>ຢ້ຽມຢາມ</li>
            <li>ການຈ່ອງ</li>
        </ul>
        <div className='hidden md:flex'>
          <BiSearch className='mr-2' size={20}/>
          <MdGTranslate className='mr-2' size={20}/>
          <BsPerson size={20}/>
        </div>

         {/**hamburger */}
        <div onClick={handleNav} className='md:hidden z-10'>
         {nav ? <AiOutlineClose className='text-black' size={20}/> : <HiOutlineMenuAlt4 size={20}/>}
        </div>

         {/**mobile menu dropdown */}

        <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col': 'absolute left-[-100%]'}>
        <ul className=''>
            <h1>ທ່ຽວລາວ.</h1>
            <li className='border-b'>ໜ້າຫຼັກ</li>
            <li className='border-b'>ປາຍທາງ</li>
            <li className='border-b'>ແຫຼ່ງທ່ອງທ່ຽວ</li>
            <li className='border-b'>ຢ້ຽມຢາມ</li>
            <li className='border-b'>ການຈ່ອງ</li>
            <div className='flex flex-col'>
              <button className='my-6 text-2xl'>ຄົ້ນຫາ</button>
              <button>ບັນຊີ</button>
            </div>
            <div className='flex justify-around my-6'>
              <FaFacebook className='icons'/>
              <FaYoutube className='icons'/>
              <FaTiktok className='icons'/>
            </div>
        </ul>
        </div>
    </div>
  )
}
export default Navbar