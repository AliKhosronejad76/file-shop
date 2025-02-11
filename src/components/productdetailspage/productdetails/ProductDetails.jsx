import Image from "next/image";

export default function ProductsDetail(){
    return(
        <div
         className=" rounded-md p-4 flex "
        >
            <Image 
                src="/img/book.jpg"
                width={500}
                height={500}
                className="w-[250px] h-[250px]"
            />
            <div className="py-6 mr-4 w-full">
                <h1>
                    کتاب جلال ال احمد-بوف کور
                </h1>
                <ul className="my-5 text-sm text-gray-800  w-full">
                    <li className="w-full my-2 flex items-center justify-between">
                        <span className="w-[14%] bg-gray-200 py-2 px-3 rounded-md">کلید</span>
                        <span className="w-[85%] bg-gray-200 py-2 px-3 rounded-md">مقدار</span>
                    </li>
                    <li className="w-full my-2 flex items-center justify-between">
                        <span className="w-[14%] bg-gray-200 py-2 px-3 rounded-md">کلید</span>
                        <span className="w-[85%] bg-gray-200 py-2 px-3 rounded-md">مقدار</span>
                    </li>
                    <li className="w-full my-2 flex items-center justify-between">
                        <span className="w-[14%] bg-gray-200 py-2 px-3 rounded-md">کلید</span>
                        <span className="w-[85%] bg-gray-200 py-2 px-3 rounded-md">مقدار</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}