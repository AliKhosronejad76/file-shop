import ActionButtons from "@/components/aside/actionbuttons/ActionButtons";
import InfoBox from "@/components/aside/infobox/InfoBox";
import ShortDesc from "@/components/aside/shortdesc/ShortDesc";
import SubscribeNewsletter from "@/components/aside/subscribenewsletter/SubscribeNewletter";

export default function ProductsLayout({children}){
    return(
        <div className="px-4 flex justify-between ">
            <main className="w-[74%] px-4 mt-4 mb-10 bg-white rounded-xl shadow-2xl">
                {children}
            </main>
            <aside className="w-[24%]  ">
                <ActionButtons />
                <InfoBox/>
                <ShortDesc/>
                <SubscribeNewsletter />
            </aside>
        </div>
    )
}