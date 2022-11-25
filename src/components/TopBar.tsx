import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Bag from '../assets/vectors/bag.svg'
import { CartContext } from '../CartContext'


export default function TopBar(){
    const {cartItems} = useContext(CartContext)
    const [itemsAmount, setItemsAmount] = useState(0)

    useEffect(()=>{
        if(cartItems && cartItems.length > 0){
            setItemsAmount(cartItems.map((item:any) => item.amount).reduce((prev : number, next:number) => prev + next))
        } else{
            setItemsAmount(0)
        }
    },[cartItems])

    return(
        <nav className="text-white px-2.5 py-6 flex justify-between items-center md:mb-6">
            <Link className="text-xl font-bold" to={'/'}>WeMovies</Link>
            <Link className="flex justify-between items-center" to={'/cart'}>
                <div className='text-right mr-2.5'>
                <h2 className='text-sm font-semibold hidden md:block '>Meu carrinho</h2>
                <p className='text-xs text-gray-800'>{itemsAmount} {itemsAmount === 1 ? 'item' : 'itens'}</p>    
                </div>
                <img src={Bag} />
            </Link>
        </nav>
    )
}