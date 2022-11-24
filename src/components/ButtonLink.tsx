import { Link } from "react-router-dom"

export interface ButtonProps {
    children: any,
    to: string,
    px: string,
    [x : string] : any
}

export default function ButtonCard(props: ButtonProps){
    return(
    <Link  to={props.to} className={`py-11 rounded text-white bg-blue-500 text-xs ${props.px}`}  >
        {props.children}
    </Link>
    )
}