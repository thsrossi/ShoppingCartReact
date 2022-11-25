import { useContext } from 'react'
import Decrease from '../assets/vectors/Decrease.svg'
import Increase from '../assets/vectors/Increase.svg'
import { CartContext } from '../CartContext'

interface ButtonProps{
    operation: string,
    id:any
} 

export default function AddRemoveButton({operation, id}: ButtonProps){
    console.log(id)
    
    const {addItem, removeItem} = useContext(CartContext)

    const src = operation === 'add' ? Increase : Decrease
    const handleClick = operation === 'add' ? addItem : removeItem 

    return(
        <button onClick={()=>handleClick(id)}>
            <img src={src}/>
        </button>
    )
}