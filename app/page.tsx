import Image from "next/image";
import { prisma } from "./db";
import Navbar from "./components/Navbar";

export default async function Home() {
  const users = await prisma.user.findMany();
  // await prisma.users.create({
  //   data: {
  //     name: "Alice",
  //     email: "dsadsa@ds.com",
  //     password: "dsadsa",
  //   },
  // });
  return (
    <>
      <Navbar />
      <main>
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <h1>{user.name}</h1>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
