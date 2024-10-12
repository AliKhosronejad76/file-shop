import { FaUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6"


export default function Actions(){
    return(
        <div className="w-full flex items-center justify-between rounded-md mt-3">
            <UserButton/>
            <CardButton/>
        </div>
    )
}

function UserButton(){
    return(
        <button className="w-[50px] h-[50px] flex items-center justify-center bg-gray-500 rounded-md transition duration-500 hover:shadow-2xl">
          <FaUser className="w-[30px] h-[30px]  text-white "/>
         
        </button>

    )
}

function CardButton(){
    return(
        <button className="w-[130px] bg-orange-500 h-[50px] flex items-center justify-between px-2 rounded-md transition duration-500 hover:shadow-2xl">
            <span className="w-[20px] h-[20px] bg-white text-orange-500 flex items-center justify-center rounded-full">0</span>
            <span className="text-sm">سبد خرید</span>
            <div className="w-[30px] h-[30px] bg-white text-orange-500  flex items-center justify-center rounded-sm flex items-center justify-center">
                <FaCartShopping className="text-2xl" />
            </div>
        </button>
    )
}