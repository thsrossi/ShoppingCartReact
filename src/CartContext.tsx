import { createContext, useEffect, useState } from "react";


export interface cartProps{
    cartItems: any;
    addItem: (id: number) => void,
    removeItem: (id: number) => void,
    clearCart: () => void,
    deleteItem: (id: number) => void
}

export interface CartItemsProps{
    id: number,
    amount: number
}

export const CartContext = createContext({} as cartProps);

export const CartStorage = ({children}: any) =>{
    const [cartItems, setCartItems] = useState<CartItemsProps[]>([] as CartItemsProps[]);

    useEffect(()=>{
        const cartItemsData = JSON.parse(localStorage.getItem('cartItems')!)
        
        if (cartItemsData?.length > 0) {
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
    }

    function deleteItem(id:number){
        setCartItems((prevState:any)=>(
            prevState.filter((item: any) => item.id != id)
        
    ))
    }

    function clearCart(){
        setCartItems([] as CartItemsProps[])
    }

    function removeItem(id:number){
        let itemIsAlreadyInCart = false
        if(cartItems.length > 0 && cartItems){
            cartItems?.forEach((element: any, index: number) => {
                console.log(element)
                if(element.id == id && element.amount != 1){
                    let amount = element.amount - 1 
                    let cartItemsCopy = [...cartItems]
                    cartItemsCopy[index] = {id: id, amount: amount};
                    setCartItems([...cartItemsCopy])
                }
                else if(element.amount === 1){
                    deleteItem(id)
                } 
            })

            
        }      
        
        console.log(id, itemIsAlreadyInCart)
    }

    return (
        <CartContext.Provider value={{cartItems, addItem, removeItem, deleteItem, clearCart}}>
          {children}
        </CartContext.Provider>
      );
}