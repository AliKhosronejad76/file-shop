"use client";
import SingleSlider from "../module/SingleSlider"


const data =[
    {img:"http://www.coca.ir/wp-content/uploads/2017/02/nature-photos-1.jpg",href:"#"},
    {img:"http://www.coca.ir/wp-content/uploads/2014/02/beautiful-winter-photos-5.jpg",href:"#"},
    {img:"http://www.coca.ir/wp-content/uploads/2014/02/beautiful-winter-photos-11.jpg",href:"#"},

];

export default function MiddleBanner(){
    return(
        <section className="w-full px-7">
            <SingleSlider data={data}/>
        </section>
    )
}