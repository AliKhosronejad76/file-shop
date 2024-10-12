import Item from "./Item";


export default function BuyingGuide(){
    return(
        <div className="flex flex-col items-center">
            <h2 className="text-xl ">راهنما خرید</h2>
            <ul className="mt-4">
                <Item href="#" title="درباره ما"/>
                <Item href="#" title="وبلاگ"/>
                <Item href="#" title="تماس باما"/>
                <Item href="#" title="حریم خصوصی"/>
            </ul>
        </div>
    )
}