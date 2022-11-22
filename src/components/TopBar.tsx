import Bag from '../assets/vectors/bag.svg'

export default function TopBar(){
    return(
        <nav className="text-white px-2.5 py-6 flex justify-between items-center">
            <h1 className="text-xl font-bold">WeMovies</h1>
            <div className="flex justify-between items-center">
                <div className='text-right mr-2.5'>
                <h2 className='text-sm font-semibold hidden md:block '>Meu carrinho</h2>
                <p className='text-xs text-gray-800'>0 itens</p>    
                </div>
                <img src={Bag} />
            </div>
        </nav>
    )
}