import React, { useContext, useEffect, useState } from "react";
import { CartContext, CartItemsProps } from "../CartContext";
import { getProductById } from "../services/products";
import ButtonLink from "./ButtonLink";
import CartHeader from "./CartHeader";
import CartItemRow from "./CartItemRow";
import Loading from "./Loading";
import {Product} from '../@types/product'

export default function CartColumn() {
    const [subTotal, setSubTotal] = useState(0)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [itemsInCart, setItemsInCart] = useState<Product[]>([] as Product[])
    const context = useContext(CartContext)


    async function getItems() {
        const respPromises = context?.cartItems?.map(({id}: CartItemsProps) => getProductById(id));
        let respArrays: Product[] = await Promise.all(respPromises);
        respArrays = respArrays.map((product : Product)=> {
            return (
                {
                    ...product,
                    amount: context.cartItems?.find((element: CartItemsProps) => element.id === product.id).amount
                }
            )
        });
        setItemsInCart(respArrays)
    }

    useEffect(() => {
        getItems()
        setIsLoading(false)
    }, [])

    useEffect(() => {
        let auxiliar = [...itemsInCart]

        auxiliar.forEach((product: Product) => {
            let amount = context.cartItems?.find((element: CartItemsProps) => element.id === product.id)?.amount
            if (amount > 0) {
                product.amount = context.cartItems?.find((element: CartItemsProps) => element.id === product.id)?.amount
            } else {
                auxiliar = auxiliar.filter((item: Product) => item.id != product.id)
            }
        }
        )
        setItemsInCart(auxiliar)
    }, [context.cartItems])

    useEffect(()=>{
        if(itemsInCart && itemsInCart.length > 0){
            setSubTotal(itemsInCart?.map((item:Product) => item.amount ? item?.amount * item.price : 0)?.reduce((prev : number, next:number) => prev + next))
        }
    },[itemsInCart])

    return (
        <>
            {isLoading == true ?
                <Loading />
                :
                <div className="bg-white mx-4 mb-4 p-4 rounded basis-full md:basis-auto flex flex-col justify-between">
                        <CartHeader/>
                        
                        <div className="basis-full">
                        {itemsInCart?.map((item: Product) => {
                            return (
                                <div key={item.id} className="md:m-0 mb-4">
                                    <CartItemRow product={item} />
                                </div>
                            )
                        })}
                        </div>
                    
                    <div className="border-t border-gray-800 pt-5 font-bold text-sm flex flex-col-reverse md:justify-between md:flex-row md:mt-5">

                        <ButtonLink to={'/sucessbuy'} className='flex justify-center md:w-[235.42px] mt-4 md:mt-0'>
                            FINALIZAR PEDIDO
                        </ButtonLink>
                        <div className="flex justify-end items-center">
                            <p className="mr-4  text-gray-800">TOTAL</p>
                            <p className="text-2xl">R$ {subTotal.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}