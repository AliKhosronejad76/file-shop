import { HiOutlineMailOpen } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";

export default function ContactUs(){
    return(
        <div className="flex flex-col items-end w-full gap-5 ">
            <Item text={"021-6676176"} icon={<LuPhone className="text-2xl rotate-[-45deg]"/>} />
            <Item text={"infoShop@online.com"} icon={<HiOutlineMailOpen className="text-2xl rotate-[-45deg] " />} />
        </div>
    )
}

function Item({icon , text }){
    return(
        <div className="flex items-center ">
            <p className="text-gray-700 ml-2">
                {text}
            </p>
            <div className="rotate-45 p-1.5 bg-gray-200 rounded-lg text-gray-700">
                {icon}
            </div>
            
        </div>
    )
}