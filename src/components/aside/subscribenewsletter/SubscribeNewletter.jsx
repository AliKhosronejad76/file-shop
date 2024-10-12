import { IoMdSend } from "react-icons/io"

export default function SubscribeNewsletter(){
    return(
        <div className="bg-white shadow-xl rounded-md p-3 my-5">
            <h2>عضویت در خبرنامه</h2>
            
            <div className="mt-3 text-gray-700 w-full border border-gray-400 rounded-md px-2 mt-6 mb-3" >
                <form 
                    className="flex items-center w-full h-[40px]"
                >
                    <input 
                        type="text"
                        className="w-[90%] h-full outline-none transition duration-700 px-2 py-1"
                     />
                    <button 
                        className="w-[10%] h-full flex items-center justify-center"
                    >
                        <IoMdSend className="text-xl" />
                    </button>
                </form>
            </div>
        
        
        </div>
    );

}