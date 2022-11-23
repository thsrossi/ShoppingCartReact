import { Product } from "../@types/product";
import Button from "./Button";
import CartShopping from "../assets/vectors/VectorShoppingCart.svg";

export interface CardProps {
    product: Product
}

export default function ProductCard(props: CardProps) {
    return (
        <div className="w-full rounded p-11 bg-white text-center max-w-[343px] mx-auto font-bold">
            
                <img className="mx-auto" src={props.product.image} />
                <h6 className="pt-2 text-xs">{props.product.title}</h6>
                <p className="pt-1">R$ {props.product.price.toFixed(2)}</p>
                <Button className="text-xs w-full flex justify-center mt-2">
                    <div className="inline-flex font-normal mr-3">
                        <img src={CartShopping} className="mr-1"/>
                        <span>0</span>
                    </div>
                    ADICIONAR AO CARRINHO
                </Button>
        </div>
    ) 
}