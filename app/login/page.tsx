import React from "react";
import Navbar from "../components/Navbar";
import { prisma } from "../db";
import { redirect } from "next/navigation";

async function createUser(data: FormData) {
  "use server";

  const username = data.get("username")?.valueOf();
  if (typeof username !== "string" && username?.length === 0) {
    throw new Error("Username is required");
  }

  const email = data.get("email")?.valueOf();
  if (typeof email !== "string" && email?.length === 0) {
    throw new Error("Email is required");
  }

  const password = data.get("password")?.valueOf();
  if (typeof password !== "string" && password?.length === 0) {
    throw new Error("Password is required");
  }

  await prisma.user.create({
    data: {
      name: username,
      email: email,
      password: password,
    },
  });

  redirect("/plans");
}

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="container flex justify-center items-center">
        <form action={createUser}>
          <div className="text-4xl font-bold">Login</div>
          <div className="text-2xl font-bold">Username</div>
          <input
            className="border-2 border-gray-400 rounded-xl p-2"
            type="text"
            name="username"
          />
          <div className="text-2xl font-bold">Email</div>
          <input
            className="border-2 border-gray-400 rounded-xl p-2"
            type="email"
            name="email"
          />
          <div className="text-2xl font-bold">Password</div>
          <input
            className="border-2 border-gray-400 rounded-xl p-2"
            type="password"
            name="password"
          />
          <div className="flex justify-center">
            <button className="bg-blue-400 text-white p-2 rounded-md shadow-md mt-2 font-bold">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
