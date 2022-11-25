import { useContext, useState } from 'react'
import DeleteIcon from '../assets/vectors/Delete.svg'
import { CartContext } from '../CartContext'
import AddRemoveButton from './AddRemoveButton'

export default function CartItemRow({product}: any){
    const context = useContext(CartContext)
    const [amountValue, setAmountValue] = useState(product.amount)

    // console.log(product)
    return(
        <div className="flex font-bold w-full md:items-center md:mt-5">
        <div ><img className={'max-w-[64px] md:max-w-[89px]'} src={product.image}/></div>
        <div className="flex justify-between w-full md:items-center">
        <div className='mx-4 md:flex md:basis-2/3 md:justify-between'> 
            <div className='md:basis-7/12'>
                <p className="text-sm mb-5 md:mb-2">{product.title}</p>
                <p className="hidden md:block">R$ {product.price.toFixed(2)}</p>
            </div>
            <div className='flex items-center justify-center mx-auto'>
                <AddRemoveButton operation={'remove'} id={product.id}/>
                {/* <input 
                    value={amountValue} 
                    type={'number'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmountValue(e.target.value)}
                    className='mx-2.5 border rounded border-gray-500 pl-3 max-w-[59px]'
                /> */}
                <div className='mx-2.5 border rounded border-gray-500 w-[59px] '>
                    <p className="font-normal text-sm py-1 pl-3">{product.amount}</p>
                </div>
                <AddRemoveButton operation={'add'} id={product.id}/>
            </div>
        </div>
        <div className="md:basis-1/3 md:flex md:flex-row-reverse md:justify-between md:items-center">
            <div className="flex items-center justify-end mb-4 md:m-0">
                <p className="mr-4 md:hidden block">R$ {product.price.toFixed(2)}</p>
                <button className='bg-transparent' onClick={() => context.deleteItem(product.id)}><img src={DeleteIcon}/></button>
            </div>
            <div className="flex flex-col items-end ">
                <p className="text-xs text-gray-800 md:hidden">SUBTOTAL</p>
                <p>R$ {product.price.toFixed(2)}</p>
            </div>
        </div>
        </div>
        </div>
    )
}