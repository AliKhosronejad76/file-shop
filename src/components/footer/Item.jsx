import { PiCaretRight } from "react-icons/pi";
import Link from "next/link";



export default function Item({href,title}){
    
    return(
        <li className="flex items-center mb-3 gap-1 text-sm text-gray-700">
            <PiCaretRight />
            <Link href={href}>
                {title}
            </Link>
        </li>
    )
}