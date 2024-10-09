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
        <li className="bg-gray-200 rounded-lg text-sm w-[110px] h-[40px]">
            <Link href={href} className="rounded-lg block w-full h-full flex items-center justify-center ">
                {title}
            </Link>
        </li>

    )
}