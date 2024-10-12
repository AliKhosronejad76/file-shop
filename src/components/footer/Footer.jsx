import QuickAccess from "./QuickAccess";
import BuyingGuide from "./BuyingGuide";
import Licenses from "./Licenses";

export default function Footer(){
    return(
        <footer className="flex flex-col">
            <div className="bg-white  px-1 py-6 flex justify-between bg-gray-200 [&>div]:w-[33%]">
                <QuickAccess />
                <BuyingGuide/>
                <Licenses />
            </div>
            <div className="py-5 px-3">
                <p className="text-gray-700 text-base">تمامی حقوق مادی و معنوی این وب سایت متعلق به شرکت می باشد</p>
            </div>
        </footer>
    )
}

