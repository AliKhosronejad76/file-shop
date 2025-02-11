"use client";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function SingleSlider({data}){
    return(
        <Swiper
            className="w-full h-[340px]"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {
                data.map((item, index)=>(
                    <SwiperSlide className="w-full h-full rounded-lg">
                        <Link href={"/"} className="inline w-full h-full">
                            <Image
                                src={item.image}
                                width={1300}
                                height={400}
                                objectFit=''
                                layout=''
                                className="object-fill w-full h-full rounded-xl bg-center"
                            />
                        </Link>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}