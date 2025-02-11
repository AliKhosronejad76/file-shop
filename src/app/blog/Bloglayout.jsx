
import { headers } from 'next/headers';
import { pathname } from 'next-extra/pathname';




export default function BlogLayout({children}){
    // const pathname = pathname();
    return(
        <div className="flex px-4">
            <main className="w-[70%] p-1">
             {children}
            </main>
            
            <h1 className="text-3xl text-gray-900">
             
      
            </h1>            
            <aside className={`w-[30%] p-1 flex flex-col gap-10`}>

            </aside>
            
        </div>
    );
}