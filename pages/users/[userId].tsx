import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

const UserDetail = ({ user }: any) => {
  const router = useRouter();
  if (router.isFallback) {
    return <>Loading...</>;
  }
  return (
    <div>
      {user?.id}: {user?.name}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  const paths = users.map((user: any) => ({
    params: { userId: user?.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params?.userId}`
  );
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
};

export default UserDetail;
