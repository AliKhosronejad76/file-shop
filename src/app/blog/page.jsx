
import BlogLayout from "./Bloglayout";
import Pageination from "@/components/blogpage/pageination/Pageination";
import ArticleItem from "@/components/blogpage/articleitem/ArticleItem";


const getData = async(pn)=>{
   const res = await fetch(`http://localhost:4000/api/articles?pn=${pn}`,{cache:"no-store"});
   const data = await res.json();
   return data; 
}




export default  async function Blog({searchParams}){
  const params = new URLSearchParams(searchParams);
  const pn = params.get("pn");
  const data = await getData(pn);
  const lenght = data.postsSize;

  return(
        <BlogLayout>
        
          <div className="px-2">
    
                {data.data.map(i=><ArticleItem key={i.id} post={i}/>)}
          </div>
          <div className="px-2">
            <Pageination 
              lenght={lenght}
      
            />
          </div>
         
        </BlogLayout>
    )
}