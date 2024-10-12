import Link from "next/link";

export default function Menu(){
    return(
        <ul className="flex gap-3">
            <Item href="#" title="صفحه اصلی"/>
            <Item href="#" title="بازی کامبیوتری"/>
            <Item href="#" title="طرح های گرافیکی"/>
            <Item href="#" title="وبلاگ"/>
         
        </ul>
    )
}

function Item({href , title}){
    return(
        <li className="bg-white rounded-lg text-sm w-[110px] h-[40px] transition duration-700 hover:shadow-2xl hover:translate-y-[-3px]">
            <Link href={href} className="rounded-lg block w-full h-full flex items-center justify-center ">
                {title}
            </Link>
        </li>

    )
}