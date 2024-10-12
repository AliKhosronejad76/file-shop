import Image from "next/image"
import Link from "next/link"

export default function GraphicItems(){
    return(
        <section className="py-4 px-8">
            <div className="flex flex-wrap justify-between">
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>

            </div>
        </section>
    )
}

function Box(){
    return(
        <div className="w-[23%] py-4 px-3 rounded-md bg-indigo-200 mb-8 hover:translate-y-[-3px] transition duration-700 hover:shadow-2xl">
           <Link href="#" className=" flex items-center justify-between">
            <p className="text-sm">فایل لایه باز فوتوشاب</p>

            <Image
                    src="/logo.png"
                    width={100}
                    height={100}
                    className="w-[50px] h-[50px]"
                />
           </Link>
           
        </div>
    )
}