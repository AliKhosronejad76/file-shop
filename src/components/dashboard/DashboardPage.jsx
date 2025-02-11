"use client";
import {useState} from "react";
import Ctrl from "./Ctrl";

// tabs 
import MiddleBannerSettings from "./settingstabs/middlebanner/MiddleBannerSettings";
import SlidersSettings from "./SlidersSettings";
//tabs

export default function DashboardPage(){
    const [tab , setTab] = useState("");
    return(
        <div className="w-full flex">
            <Ctrl setTab={setTab} />
            <div className="w-[80%]">
                {tab === "middlebanners" && <MiddleBannerSettings/>}
                {tab === "sliders" && <SlidersSettings/>}

            </div>            
        </div>
    )
}