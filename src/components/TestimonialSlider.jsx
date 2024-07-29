import React from 'react'
import {testimonialsData} from '../Data'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import './slider.css'
import { Pagination } from 'swiper/modules'
export default function TestimonialSlider() {
  return (
    <Swiper slidesPerView={'auto'} centeredSlides={true} spaceBetween={20} pagination={{clickable:true, }} modules={[Pagination]} className='mySwiper'>
        {testimonialsData.map((slide,index)=>{
            const{image,message,name,web}=slide;
            return(
                <SwiperSlide className='bg-white rounded-[20px] border
                 border-accent-primary md:max-w-[645px] max-h-[330px] 
                 pt-[60px] px-[35px] md:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl'
                  key={index}>
                <img src={image} alt="" className="" />
                <div className="">
                    <div className="">
                        <p className="text-lg font-bold text-primary">
                            {name}
                        </p>
                    </div>
                    <div className="">
                        <p className="mb-4 font-semibold text-accent-primary">
                            {web}
                        </p>
                    </div>
                    <div className="">
                        <p className="max-w-[340px]">
                            {message}
                        </p>
                    </div>
                </div>
             </SwiperSlide>
            )  
        })}
    </Swiper>
  )
}
