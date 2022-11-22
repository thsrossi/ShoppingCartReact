import { baseURL } from "./baseURL";

export function getAllProducts(){

    let response = fetch(`${baseURL}/products`)
    .then((response) => response.json())
    .then((data) => {return data})

    return response
}