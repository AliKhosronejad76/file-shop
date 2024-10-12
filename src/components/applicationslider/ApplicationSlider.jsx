import MultipleSlider from "../module/MultipleSlider"; 


const data=[
    {img:"/img/book.jpg" , title:"عنئان محصول", price:"120000"},
    {img:"/img/book.jpg" , title:"نام محصول به صورت تستی", price:"1550000"},
    {img:"/img/book.jpg" , title:"عنوان جدسدسadvanced", price:"140000"},
    {img:"/img/book.jpg" , title:"عنوان جدسدسadvanced", price:"140000"},
    {img:"/img/book.jpg" , title:"عنوان جدسدسadvanced", price:"140000"},
    {img:"/img/book.jpg" , title:"عنوان جدسدسadvanced", price:"140000"},

];

export default function ApplicationSlider(){
    return(
        <section className="bg-indigo-400 px-4 py-4 mt-10 mb-10">
            <div className="pr-2 mt-2 mb-6 flex items-center w-full">
                <div className="bg-white w-[3px] h-[30px]"></div>
                <h2 className="text-white text-xl mr-2">اببلیکیشن ها</h2>
            </div>
            <div className="px-5 pb-5">
                <MultipleSlider data={data}/>
            </div>
        </section>
    )
}