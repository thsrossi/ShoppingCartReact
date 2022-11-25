import NotFound from '../assets/vectors/NotFound.svg'
import ButtonLink from './ButtonLink'

<div className=""></div>

export default function EmptyCart() {
    return (
        <div className="bg-white mx-4 rounded py-16 overflow-hidden flex flex-col items-center font-bold">
            <h3 className="text-xl mx-10 text-center">
                Parece que não <br className='sm:hidden' />
                há nada por aqui :(
            </h3>
            <img src={NotFound} className=" min-w-[447px] my-8" />
            <ButtonLink to='/' className='px-15'>
                VOLTAR
            </ButtonLink>
        </div>
    )
}