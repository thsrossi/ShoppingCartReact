import { useEffect, useState } from "react";
import { Product } from "../@types/product";
import Loading from "../components/Loading";
import ProductsGrid from "../components/ProductsGrid";
import TopBar from "../components/TopBar";
import { getAllProducts } from "../services/products";

export default function Home(){

    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(true)
     
    async function getProducts() {
        setIsLoading(true)
        setProducts(await getAllProducts())
        setIsLoading(false)
    }

    useEffect(()=>{
        getProducts()
    },[])

    return (
        <div className="h-screen flex flex-col">
            <TopBar/>
            {isLoading ? <Loading /> : <ProductsGrid products={products}/>}
        </div>
    )
}