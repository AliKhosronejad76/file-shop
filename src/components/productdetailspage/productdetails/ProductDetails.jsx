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
            <div className="py-6 mr-4">
                <h1>
                    کتاب جلال ال احمد-بوف کور
                </h1>
                <ul className="my-5 text-sm">
                    <li className=" my-2 flex items-center gap-12">
                        <span>کلید</span>
                        <span>مقدار</span>
                    </li>
                    <li className=" my-2 flex items-center gap-12">
                        <span>کلید</span>
                        <span>مقدار</span>
                    </li>
                    <li className=" my-2 flex items-center gap-12">
                        <span>کلید</span>
                        <span>مقدار</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}