import { baseURL } from "./baseURL";

export function getAllProducts(){

    let response = fetch(`${baseURL}/products`)
    .then((response) => response.json())
    .then((data) => {return data})

    return response
}


export async function getProductById(id: number){

    let response = fetch(`${baseURL}/products/${id.toString()}`)
    .then((response) => response.json())
    .then((data) => {return data})

    return response
}

