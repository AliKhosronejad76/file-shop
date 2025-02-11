
import SingleBlogLayout from "./layout";
import ArticleCard from "@/components/articlecard/ArticleCard";
import Image from "next/image";
import { LuWebcam } from "react-icons/lu"; 
import { FaComment } from "react-icons/fa";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { pathname } from "next-extra/pathname";

const getData = async(slug)=>{
    const  res = await fetch(`http://localhost:4000/api/get-single-blog/${slug}`);
    const  data = await res.json()
    return data ;
}



export default async function SingleBlog({params}){
    // console.log(params.slug)''
    const data = await getData(params.slug);
    return(
        <>
           <div className="bg-red-100 h-[370px] my-7">
            <Image 
                src={data.data.image}
                width={500}
                height={500}
                className="w-full h-full rounded-2xl"
            />
           </div>
           <div className="py-6">
                <h2 className="text-lg text-blue-600">
                 {data.data.title}
                </h2>
           </div>
            <div className="flex my-3 items-center gap-5">
                <InfoItem icon={<LuWebcam/>} text="تعداد بازدید:51" />
                <InfoItem icon={<FaComment/>} text="تعداد دیدگاه5:" />
                <InfoItem icon={<BsFillCalendar2DateFill/>} text="تاریخ انتشار 1403/6/2" />

            </div>
           <div>
                <h1 className="text-lg py-6">توضیحات کامل</h1>
                <p className="leading-9 p-2 text-justify text-sm text-gray-700">
                {data.data.longDesc}
                </p>
           </div>

           <div>
             <h1 className="text-xl mt-5 mb-6">مقالات مرتبط</h1>
             <div className="flex  justify-between my-5  [&>article]:w-[32%]">
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />

             </div>
           </div>
        </>
    )
}

function InfoItem({ icon , text }){
    
    return(
        <div className="w-max bg-gray-200 text-sm gap-2 text-gray-800 rounded-md flex items-center justify-between px-2 py-1">
            {icon}
            <span>{text}</span>
        </div>
    )
}