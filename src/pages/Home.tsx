import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import TopBar from "../components/TopBar";
import { getAllProducts } from "../services/products";

export default function Home(){

    const [products, setProducts] = useState([])
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
            {isLoading ? <Loading /> : <p>{products[1]?.id}</p>}
        </div>
    )
}