import { Link } from "react-router-dom"

export interface ButtonProps {
    children: any,
    to: string,
    className: string,
    onClick?: () => void,
    [x : string] : any
}

export default function ButtonLink(props: ButtonProps){
    return(
    <Link  to={props.to} className={`py-11 rounded text-white bg-blue-500 text-xs ${props.className}`}  >
        {props.children}
    </Link>
    )
}