import Image from "next/image";
import Link from "next/link";

export default function ArticleItem({post}){
    return(
        <div className="w-full rounded-xl p-2 flex bg-white mb-6">
                <div className="w-[50%]">
                    <Link href={`/blog/${post.slug}`}>
                        <Image 
                            src={post?.image}
                            width={500}
                            height={500}
                            alt={post?.slug}
                            className="w-full object-fill h-[18rem] rounded-xl"
                        />
                 
                    </Link>   
                </div>
                <div className="w-[50%] text-zinc-700 flex flex-col justify-around py-6 px-2">
                       <div>
                        <Link href={`/blog/${post.slug}`}>
                            <h1 className="text-xl py-3 font-bold ">
                                    {post?.title}
                            </h1>
                        </Link>
                       

                            <div className="w-full flex justify-between items-center px-2 ">
                                <p className="text-sm">مهدیس امیری</p>
                                <div>
                                    {post?.pageView}
                                </div>
                            </div>
                       </div>
      
                        <div className="text-sm leading-loose text-justify">
                            <Link href="/">
                             {post?.shortDesc}
                            </Link>
                        </div>
                </div>
        </div>
    );
}