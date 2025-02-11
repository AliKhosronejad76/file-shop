import Link from "next/link";
import Image from "next/image";
import ArticleCard from "../articlecard/ArticleCard";
// import { RSCPathnameNormalizer } from "next/dist/server/future/normalizers/request/rsc";



const getData = async()=>{
    const   res  = await fetch("http://localhost:4000/api/get-latest-posts",{cache:"no-store"})
    const   data = res.json();
    return  data;
   
}




export default async function ArticlesSection(){
    //
    const data =  await getData();

    return(
        <section>
            <div className="py-6 px-5 flex justify-between ">
                <h1 className="text-lg">آخرین مقالات</h1>

                <Link href="/blog" className="block text-sm bg-gray-800 text-white rounded-md py-2 px-3 transition duration-800 hover:bg-gray-700">
                    برو به وبلاگ
                </Link>
            </div>

            <div className="flex justify-between my-6 px-6 [&>article]:w-[23%]">
               {
                data?.data.map(i=>(
                    <ArticleCard post={i} key={i._id}/>
                ))
               }
                  
            

            </div>
        </section>
    )
} 

