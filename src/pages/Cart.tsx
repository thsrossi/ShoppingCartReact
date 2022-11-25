import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import CartColumn from "../components/CartColumn";
import EmptyCart from "../components/EmptyCart";
import TopBar from "../components/TopBar";

export default function Cart(){
    const {cartItems} = useContext(CartContext)

    return(
        <div className="h-screen flex flex-col">
        <TopBar/>
        
        {cartItems && cartItems.length > 0 ? 
         <CartColumn/> : 
         <EmptyCart/>
        }
        
        </div>
    )
} 