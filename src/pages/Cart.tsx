import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import CartColumn from "../components/CartColumn";
import EmptyCart from "../components/EmptyCart";
import TopBar from "../components/TopBar";

export default function Cart(){
    const {addItem, cartItems} = useContext(CartContext)

    return(
        <>
        <TopBar/>
        <div className="bg-white mx-4 rounded h-full flex flex-col">
        {cartItems ? 
         <CartColumn/> : 
         <EmptyCart/>
        }
        </div>
        </>
    )
} 