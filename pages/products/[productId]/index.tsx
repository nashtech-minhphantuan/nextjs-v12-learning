import { useRouter } from "next/router"

export default function ProductDetail () {
    const router = useRouter();
    console.log(router);
    return (
        <h1>Detail page { router.query.productId }</h1>
    )
}