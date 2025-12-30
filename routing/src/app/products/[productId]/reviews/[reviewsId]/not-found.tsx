//handling route parameters
"use client";
import { usePathname } from "next/navigation";

export default function NotFound(){
    const pathname = usePathname();
    const productId = pathname.split('/')[2];
    const reviewsId = pathname.split('/')[4];

    return<h2> Reviews {reviewsId} not found for Product {productId}</h2>
}