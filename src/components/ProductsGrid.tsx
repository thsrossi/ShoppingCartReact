import { Product, Products } from "../@types/product";
import ProductCard from "./ProductCard";


export default function ProductsGrid(props: Products){

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {props?.products?.map((element)=>{
                return (
                <ProductCard key={element.id} product={element}/>
                )
                })}
        </div>
    )
}