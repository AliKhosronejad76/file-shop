import ProductsLayout from "./ProductsLayout"
import ProductsDetail from "@/components/productdetailspage/productdetails/ProductDetails"
import ProductDescription from "@/components/productdetailspage/productdescription/ProductDescription"
import RelatedContent from "@/components/productdetailspage/relatedcontent/RelatedContent"

export default function Page(){
    return(
        <ProductsLayout>
            <ProductsDetail />
            <ProductDescription />
            <RelatedContent />
        </ProductsLayout>
    )
}