export interface ButtonProps {
    children: any,
    className: string,
}

export default function Button(props: ButtonProps){
    return(
    <a className={"py-11 rounded text-white bg-blue-500 " + props.className} >
        {props.children}
    </a>
    )
}