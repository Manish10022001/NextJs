export default async function ReviewsDetails(
    {params} : {params:Promise<{productId:string, reviewsId:string}>}
){
    const {productId, reviewsId} = (await params);
    return <h3>{reviewsId} Review about Product {productId}</h3>
}