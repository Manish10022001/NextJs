import { Metadata } from "next";

type Props = {
    params: Promise<{productId:string}>
}

export const generateMetadata = async({params}:Props): Promise<Metadata> =>{
    const id = (await params).productId;

    const title = await new Promise<string>((resolve)=>{
        setTimeout(()=>{
            resolve(`iPhone ${id}`);
        },100);
    })
    return {title:`Product ${title}`}
}
//app router receives routes through params prop and so destructure and type of params is promise that result to a object containing dynamic key value pair
//and use async await to resolve promise and access dynamic segment
// export default async function ProductDetails({params} : 
//                                         {params: Promise<{productId:string}>}){
export default async function ProductDetails({params} : Props){
    const productId = (await params).productId

    return <h2>Details about product {productId}</h2>
}