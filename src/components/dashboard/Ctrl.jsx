"use client";
import { useState } from "react";
import { items } from "@/dashboardCtrlData/DashboardCtrlData";


export default function Ctrl({setTab}){
    const [ctrlItems , setCtrlItems] = useState(items);
    return(
        <ul className="bg-sky-900 w-[20%] py-2">
            {ctrlItems.map(( item )=><Item label={item.label} key={item.id} title={item.title} setTab={setTab}/>)}
        </ul>
    );
}


function Item({ title , label , setTab }){
    
    return(
        <li onClick={()=>setTab(label)} className="text-sm text-white px-6 py-4">
            <button className="">
                {title}
            </button>
        </li>
    )
}