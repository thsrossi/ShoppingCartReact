import { createContext, useEffect, useState } from "react";

export interface cartProps{
    cartItems: any;
    addItem: (id: number) => void
}

export const CartContext = createContext({} as cartProps);

export const CartStorage = ({children}: any) =>{
    const [cartItems, setCartItems] = useState<any>('');

    useEffect(()=>{
        const cartItemsData = JSON.parse(localStorage.getItem('cartItems')!)
        
        if (cartItemsData) {
            setCartItems(cartItemsData)
        }
    },[])

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])


    console.log(cartItems)

    function addItem(id:number){
        let itemIsAlreadyInCart = false
        if(cartItems){
            cartItems?.forEach((element: any) => {
                if(element.id == id){
                    element.amount = element.amount + 1
                    itemIsAlreadyInCart = true
                } 
            })
        } else{
            setCartItems([{id: id, amount: 1}])
        }
        
        if(itemIsAlreadyInCart){
            setCartItems((prevState:any)=>({
                ...prevState.push({id: id, amount: 1})
            }))
        }

        console.log(id, itemIsAlreadyInCart)
    }

    return (
        <CartContext.Provider value={{cartItems, addItem}}>
          {children}
        </CartContext.Provider>
      );
}