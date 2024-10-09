import Image from "next/image";


export default function Logo(){
    return(
        <div className="w-full rounded-xl shadow-2xl p-2 flex flex-col items-center">
            <Image 
                src={"/img/logo.png"}
                width={300}
                height={300}
                className="w-[100px] "
            />
            <h3 className="text-base mt-3">فروشگاه فایل</h3>
        </div>
    )
}