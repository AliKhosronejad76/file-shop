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
        <div className="flex items-center justify-center gap-3 bg-white w-max px-3 h-[63px] rounded-2xl  transition duration-700 hover:shadow-2xl hover:translate-x-[3px]">
            <p className="text-gray-700 text-sm">
                {text}
            </p>
            <div className="rotate-45 p-1.5 bg-gray-200 rounded-lg text-gray-700">
                {icon}
            </div>
            
        </div>
    )
}