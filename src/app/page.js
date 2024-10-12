import Image from "next/image";
import MiddleBanner from "@/components/middlebanner/MiddleBanner";
import ApplicationSlider from "@/components/applicationslider/ApplicationSlider";
import GraphicItems from "@/components/graphicitems/GraphicItems";
import GraphicSlider from "@/components/graphicslider/GraphicSlider";
import ArticlesSection from "@/components/articlessection/ArticlesSection";



export default function Home() {
 return(
    <div className="">
      <MiddleBanner/>
      <ApplicationSlider/>
      <GraphicItems/>
      <GraphicSlider/>
      <ArticlesSection/>
    </div>
 )
}
