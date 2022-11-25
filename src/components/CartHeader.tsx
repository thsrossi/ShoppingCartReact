export default function CartHeader(){
    return( 
    <div className="hidden md:flex font-bold text-gray-800">
        <p className="basis-2/4">PRODUTO</p>
        <p className="basis-1/5 pl-2">QTD</p>
        <p className="pl-2">SUBTOTAL</p>
    </div>
    )
}