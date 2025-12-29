//app router receives routes through params prop and so destructure and type of params is promise that result to a object containing dynamic key value pair
//and use async await to resolve promise and access dynamic segment
export default async function ProductDetails({params} : 
                                        {params: Promise<{productId:string}>}){
    const productId = (await params).productId
    return <h2>Details about product {productId}</h2>
}