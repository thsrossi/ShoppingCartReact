import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import { getProductById } from "../services/products";
import ButtonLink from "./ButtonLink";
import CartHeader from "./CartHeader";
import CartItemRow from "./CartItemRow";
import Loading from "./Loading";

export default function CartColumn() {
    const [subTotal, setSubTotal] = useState(0)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [itemsInCart, setItemsInCart] = useState<any>([])
    const context = useContext(CartContext)

    async function getItems() {
        const respPromises = context?.cartItems?.map(({ id }: any) => getProductById(id));
        let respArrays = await Promise.all(respPromises);
        respArrays = respArrays.map(product => {
            return (
                {
                    ...product,
                    amount: context.cartItems?.find((element: any) => element.id === product.id).amount
                }
            )
        });
        setItemsInCart(respArrays)
    }

    function hanldeAdd(id: number) {
        context.removeItem(id)
    }

    useEffect(() => {
        getItems()
        setIsLoading(false)
    }, [])

    useEffect(() => {
        let auxiliar = [...itemsInCart]

        auxiliar.forEach((product: any) => {
            let amount = context.cartItems?.find((element: any) => element.id === product.id)?.amount
            if (amount > 0) {
                product.amount = context.cartItems?.find((element: any) => element.id === product.id)?.amount
            } else {
                auxiliar = auxiliar.filter((item: any) => item.id != product.id)
            }
        }
        )
        setItemsInCart(auxiliar)
    }, [context.cartItems])

    return (
        <>
            {isLoading == true ?
                <Loading />
                :
                <div className="bg-white mx-4 mb-4 p-4 rounded basis-full md:basis-auto flex flex-col justify-between">
                        <CartHeader/>
                        
                        {itemsInCart?.map((item: any) => {
                            return (
                                <div key={item.id} >
                                    <CartItemRow product={item} />
                                </div>
                            )
                        })}
                    
                    <div className="border-t border-gray-800 pt-5 font-bold text-sm flex flex-col-reverse md:justify-between md:flex-row md:mt-5">

                        <ButtonLink to={'/'} className='flex justify-center md:w-[235.42px] mt-4 md:mt-0'>
                            FINALIZAR PEDIDO
                        </ButtonLink>
                        <div className="flex justify-end items-center">
                            <p className="mr-4  text-gray-800">TOTAL</p>
                            <p className="text-2xl">R$29,90</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}