import { IoIosSearch } from "react-icons/io";

export default function Searchbar(){
    return(
        <div className="shadow-xl bg-white  px-1 rounded-lg">
            <form className="flex gap-2 items-center">
                <input 
                  type="text"
                  placeholder="جست وجو"
                  className="w-[90%] py-3 px-2 outline-none"
                 />
                <button
                    className="w-[10%]  flex items-center bg-white"
                >
                    <IoIosSearch />
                </button>
            </form>
        </div>
    );
}