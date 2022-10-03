import React,{useState} from 'react'
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs'

const sliderData =[
    {
        url:'https://a.cdn-hotels.com/gdcs/production164/d100/b452b226-b994-474b-b6b3-1843f3a7cc2d.jpg'
    },
    {
        url:'https://www.exotravel.com/blog/wp-content/uploads/2018/05/Laos-Main-Street-in-Luang-Prabang.jpg'
    },
    {
        url:'https://homeiswhereyourbagis.com/wp-content/uploads/2019/08/artikelbild-luang-prabang-highlights-en.jpg'
    }
]

export const Caurasel = () => {
    const [slide,setSlide] = useState(0)

    const length = sliderData.length

    const prevSlide = ()=>{
        setSlide(slide === length -1 ? 0 :  slide + 1)
    }
    const nextSlide = ()=>{
          setSlide(slide === 0 ? length -1 : slide - 1)
    }
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative 
    flex justify-center items-center'>
        <BsFillArrowLeftCircleFill onClick={prevSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'/>
        <BsFillArrowRightCircleFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-8' />
        {sliderData.map((item,index)=>(
            <div className={index === slide ? 'opacity-100': 'opacity-0'}>
                {index === slide && (
                <img className='w-full mx-auto rounded-sm ' src={item.url} alt="/"/>
                )}
              
            </div>
        ))}
    </div>
  )
}
