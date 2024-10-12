import { IoIosSearch } from "react-icons/io";

export default function Searchbar(){
    return(
        <div className="bg-white rounded-lg  transition duration-700 hover:routate-10 hover:shadow-2xl">
            <form
             className="flex w-full bg-transparent"
            >
                <input 
                 type="text"  
                 className="w-[90%] text-gray-700 bg-transparent py-4 px-3 outline-none" 
                 placeholder="جست جو عنوان مورد نظر"
                />
                <button className="w-[10%] text-gray-700 flex items-center justify-center">
                 <IoIosSearch className="text-3xl"/>
                </button>
            </form>
        </div>
    )
}