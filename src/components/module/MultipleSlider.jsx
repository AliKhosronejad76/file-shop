"use client";

import Image from "next/image";
import { GrFormSearch } from "react-icons/gr";
import { IoBookmarkOutline } from "react-icons/io5";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function MultipleSlider({data}){
    return(
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {
          data.map((item , index )=>(
            <SwiperSlide>
              <Card data={item} index={index}/>

            </SwiperSlide>
          ))
        }
       
        
        
      </Swiper>
    )
}

function Card({data}){
  return(
    <div className="bg-white rounded-lg px-3 py-1 hover:translate-y-[-3px] transition duration-700  shadow-2xl">
      <Image
        src={data.img}
        width={200}
        height={200}
        className="p-2 rounded-md"
      />
      <h3 className="my-5 ">{data.title}</h3>
      <div className="flex items-center my-6 gap-3 text-sm">
        <div className="bg-gray-300 rounded-md text-center items-cener flex px-3 py-2" >برچسب</div>
        <div className="bg-gray-300 rounded-md text-center items-cener flex px-3 py-2" >برچسب</div>
      </div>

    {/* {actions} */}
      <div className="flex justify-between mt-5 pb-1">
        <div className="flex items-center gap-3">
          <button className=" bg-gray-200 rounded-md flex items-center justify-center">
            <GrFormSearch className="w-[25px] h-[25px]" />
            </button>
          <button className=" bg-gray-200 rounded-md flex items-center justify-center">
            <IoBookmarkOutline className="w-[22px] h-[22px]" />
            </button>
        </div>
      </div>
    {/* {actions} */}
    </div>
  )
}