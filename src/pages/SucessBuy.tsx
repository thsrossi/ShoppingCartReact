import ButtonLink from "../components/ButtonLink";
import TopBar from "../components/TopBar";
import SucessBuyVector from '../assets/vectors/SucessBuy.svg'
import { useContext, useEffect } from "react";
import { CartContext } from "../CartContext";

export default function SucessBuy(){
    const {clearCart} = useContext(CartContext)

    useEffect(()=>{
        clearCart()
    },[])

    return(
    <div className="h-screen">
        <TopBar/>
        <div className="bg-white mx-4 rounded py-16 overflow-hidden flex flex-col items-center font-bold">
            <h3 className="text-xl mx-10 text-center">
            Compra realizada <br className='sm:hidden' />
            com sucesso!
            </h3>
            <img src={SucessBuyVector} className=" my-8" />
            <ButtonLink to='/' className='px-15'>
                VOLTAR
            </ButtonLink>
        </div>
        
        
    </div>
    )
}