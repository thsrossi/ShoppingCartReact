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

    function addItem(id:number){
        let itemIsAlreadyInCart = false
        if(cartItems.length > 0 && cartItems){
            cartItems?.forEach((element: any, index: number) => {
                if(element.id == id){
                    itemIsAlreadyInCart = true
                    let amount = element.amount + 1
                    let cartItemsCopy = [...cartItems]
                    cartItemsCopy[index] = {id: id, amount: amount};
                    setCartItems([...cartItemsCopy])
                } 
            })

            if(!itemIsAlreadyInCart){
                setCartItems((prevState:any)=>([
                    ...prevState, {id: id, amount: 1}
                ]
            ))
            }
        }      
        else{
            setCartItems([{id: id, amount: 1}])
        }
        


        console.log(id, itemIsAlreadyInCart)
    }

    return (
        <CartContext.Provider value={{cartItems, addItem}}>
          {children}
        </CartContext.Provider>
      );
}