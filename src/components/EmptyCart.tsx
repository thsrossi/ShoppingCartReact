import NotFound from '../assets/vectors/NotFound.svg'
import ButtonCard from './ButtonLink'

export default function EmptyCart() {
    return (
        <div className="bg-transparent py-16 overflow-hidden flex flex-col items-center font-bold">
            <h3 className="text-xl mx-10 text-center">
                Parece que não <br className='sm:hidden' />
                há nada por aqui :(
            </h3>
            <img src={NotFound} className=" min-w-[447px] my-8" />
            <ButtonCard to='/' px='px-15'>
                VOLTAR
            </ButtonCard>
        </div>
    )
}