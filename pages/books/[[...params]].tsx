import Link from "next/link";
import { useRouter } from "next/router";

export default function Books() {
  const router = useRouter();
  console.log(router);
  const { params } = router.query;
  const testThis = () => {
  };
  return (
    <>
      {params && params?.length > 2 ? (
        <>more than 2 features</>
      ) : (
        <>only 2 or less features</>
      )}

      <button onClick={() => testThis()}>redirect</button>
      <nav>
        <Link href={"/about"}>123</Link>
      </nav>
    </>
  );
}
