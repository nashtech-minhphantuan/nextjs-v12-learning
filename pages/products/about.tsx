import { useRouter } from "next/router"

export default function AboutProduct () {
    const router = useRouter();
    console.log(router);
    return (
        <h1>Detail page about { router.query.productId }</h1>
    )
}