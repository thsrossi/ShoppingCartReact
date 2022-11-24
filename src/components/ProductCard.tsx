import { Product } from "../@types/product";
import ButtonCard from "./ButtonCard";
import CartShopping from "../assets/vectors/VectorShoppingCart.svg";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";

export interface CardProps {
    product: Product
}

export default function ProductCard(props: CardProps) {
    const {addItem, cartItems} = useContext(CartContext)
    let productAmountInCart : number = 0
    if(cartItems){
        productAmountInCart = cartItems?.find((element: any) => element.id === props.product.id)?.amount || 0
    }
    const [btnContent, setBtnContent] = useState<string>('ADICIONAR AO CARRINHO') 
    function handleFocus(){
        setBtnContent('ITEM ADICIONADO')
    }
    function handleBlur(){
        setBtnContent('ADICIONAR AO CARRINHO')
    }

    const itemIsAlreadyInCart : boolean = productAmountInCart > 0
    return (
        <div className="w-full rounded p-11 bg-white text-center max-w-[343px] mx-auto font-bold" >
            
                <img className="mx-auto" src={props.product.image} />
                <h6 className="pt-2 text-xs">{props.product.title}</h6>
                <p className="pt-1">R$ {props.product.price.toFixed(2)}</p>
                <ButtonCard
                onClick={()=>{addItem(props.product.id)}}
                onFocus={handleFocus}
                onBlur={handleBlur}
                >
                    <div className="inline-flex font-normal mr-3">
                        <img src={CartShopping} className="mr-1"/>
                        <span>{productAmountInCart}</span>
                    </div>
                    <span className={'w-[157px]'}>{btnContent}</span>
                </ButtonCard>
        </div>
    ) 
}