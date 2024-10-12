import Item from "./Item";


export default function QuickAccess(){
    return(
        <div className="flex flex-col items-center">
            <h2 className="text-xl">دسترسی سریع</h2>
            <ul className="mt-4">
                <Item href="#" title="درباره ما"/>
                <Item href="#" title="وبلاگ"/>
                <Item href="#" title="تماس باما"/>
                <Item href="#" title="حریم خصوصی"/>
            </ul>
        </div>
    )
}