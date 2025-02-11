import Image from "next/image";
import Link from "next/link";


export default function ArticleCard({ post }){
    return(
        <article className="bg-white  p-2 rounded-2xl hover:shadow-2xl hover:translate-y-[-3px] transition duration-700">
            <header>
                <figure>
                    <Link href="#">
                        <Image 
                            src={post?.image}
                            width={200}
                            height={200}
                            className="h-[140px] rounded-xl w-full"/>
                       
                    </Link>
                 
                </figure>              
            </header>
            <Link href="#">
                <h1 className="my-2 text-blod text-wrap">{post?.title}</h1>
            </Link>
            <p className="my-2 leading-loose text-justify text-sm text-justify- p-1">
               {post?.shortDesc}
            </p>
            <footer>
                <div className="w-full h-[2px] bg-gray-300 rounded-md mt-7 mb-2"></div>

                <div className="flex items-center justify-between my-6">
                    <div className="bg-gray-300 text-sm rounded-md p-1.5">
                        {post?.published}
                    </div>

                    <div className="bg-gray-300 text-sm rounded-md p-1.5">
                        4دیدگاه
                    </div>
                </div>
            </footer>
        </article>
    )
}