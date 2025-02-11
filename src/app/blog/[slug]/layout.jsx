import Searchbar from "@/components/aside/searchbar/Searchbar"
import ShortDesc from "@/components/aside/shortdesc/ShortDesc"
import SubscribeNewsletter from "@/components/aside/subscribenewsletter/SubscribeNewletter"

export default function Layout({children}){
    return(
        <div className="w-full px-4 flex justify-between">
        <main className="w-[74%] px-4 mt-4 mb-10 bg-white rounded-xl shadow-2xl">
            {children}
        </main>
        <aside className="w-[24%] ">
         <Searchbar />
         <ShortDesc />
         <SubscribeNewsletter/>
        </aside>
    </div>
    )
}