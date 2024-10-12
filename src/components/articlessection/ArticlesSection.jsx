import Link from "next/link";
import Image from "next/image";
import ArticleCard from "../articlecard/ArticleCard";


export default function ArticlesSection(){
    return(
        <section>
            <div className="py-6 px-5 flex justify-between ">
                <h1 className="text-lg">آخرین مقالات</h1>

                <Link href="#" className="block text-sm bg-gray-800 text-white rounded-md py-2 px-3 transition duration-800 hover:bg-gray-700">
                    برو به وبلاگ
                </Link>
            </div>

            <div className="flex justify-between my-6 px-6 [&>article]:w-[23%]">
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>

            </div>
        </section>
    )
} 

