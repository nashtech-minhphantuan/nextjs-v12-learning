import { GetStaticProps } from "next";

export default function User({ users }: any) {
  console.log(users);

  return (
    <>
      Users{" "}
      {users.map((user: any) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  console.log('revalidate')

  return {
    props: {
      users: users,
    },
    revalidate: 3,
  };
}
