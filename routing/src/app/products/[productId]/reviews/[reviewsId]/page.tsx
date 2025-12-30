import { notFound

 } from "next/navigation";
export default async function ReviewsDetails(
    {params} : {params:Promise<{productId:string, reviewsId:string}>}
){
    const {productId, reviewsId} = (await params);

    if(parseInt(reviewsId) > 1000){
        notFound();
    }

    return <h3>{reviewsId} Review about Product {productId}</h3>
}