export interface ButtonProps {
    children: any,
    [x : string] : any
}

export default function ButtonCard(props: ButtonProps){
    return(
    <button {...props} className={`py-11 rounded text-white bg-blue-500 text-xs w-full flex 
    justify-center mt-2 focus:bg-green-600 transition duration-500`}  >
        {props.children}
    </button>
    )
}