import { useRouter } from "next/router"

export default function CategoriesDetail () {
    const router = useRouter();
    console.log(router);
    return (
        <h1>CategoriesDetail page { router.query.categoriesId }</h1>
    )
}