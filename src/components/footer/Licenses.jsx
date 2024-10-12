import Image from "next/image";

export default function Licenses(){
    return(
        <div className="flex items-center gap-5 justify-center ">
            <Image  
             src="/img/1.png"
             width={300}
             height={300}
             className="w-[100px] h-[140px] "
            
            />
            <Image 
             src="/img/1.png"
             width={500}
             height={500}
             className="w-[100px] h-[140px] "
            
            />

        </div>
    );
}