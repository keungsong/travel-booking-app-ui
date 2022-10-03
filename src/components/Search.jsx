import React from 'react'
import {RiCusomerService2Full} from 'react-icons/ri'
import {MdOutlineTraveExplore} from 'react-icons/md'

export const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 px-4 py-16 gap-4'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2>ລາຍລະອຽດ ໂປໂມຊັນ</h2>
                <p className='py-4 first-letter:text-3xl first-letter:mr-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolor tempore similique pariatur quaerat facilis aliquam impedit ipsa dolores, quae, ducimus excepturi, fuga aliquid reiciendis nulla sed maxime quas! Vitae omnis libero voluptatum molestiae consectetur voluptas iure suscipit ratione corrupti ipsa? Debitis incidunt tenetur vero sed quaerat accusantium labore expedita!</p>
            </div>
        </div>
        <div>
            <div className='border text-center'>
                <p className='pt-2'>ໂປໂມຊັນ 10%</p>
                <p className='py-2'>12 ໝົດກຳນົດ</p>
                <p  className='animate-pulse py-2 bg-gray-800 text-gray-200 cursor-pointer'>ຈ່ອງເລີຍ</p>
            </div>
            <form className='w-full'>
                <div className='flex flex-col my-2'>
                    <label >
                        ປາຍທາງ
                    </label>
                    <select className='border rounded-md p-2' name="" id="">
                        <option value="">
                           ກະລຸນາ ເລືອກແຂວງ
                        </option>
                        <option value="">
                            ຫຼວງພະບາງ
                        </option>
                        <option value="">
                            ນະຄອນຫຼວງ ວຽງຈັນ
                        </option>
                        <option value="">
                            ວຽງຈັນ
                        </option>
                       
                    </select>
                </div>
                <div className='flex flex-col my-2 ' >
                    <label>
                        ເວລາເຂົ້າ
                    </label>
                    <input className='border rounded-md p-2' type="date" />
                </div>
                <div className='flex flex-col my-2'>
                    <label>
                        ເວລາອອກ
                    </label>
                    <input className='border rounded-md p-2' type="date" />
                </div>
                <button className=' flex-initial w-full shadow-md '>ຫວ່າງຢູ່ຈ່ອງໄດ້</button>
            </form>
        </div>
    </div>
  )
}
