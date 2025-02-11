"use clinet";
import SingleSlider from "../module/SingleSlider";


const getData  = async()=>{
    const res  = fetch("http://localhost:4000/api/main-slider",{cache:"no-store"});
    const data = (await res).json()
    return data;
    
   
} 


export default async function MiddleBanner(){
    const data = await getData();
    console.log(data);

    return(
        <section className="w-full px-7">
            <SingleSlider data={data.data}/>
        </section>
    )
}