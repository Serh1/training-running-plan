// pages/[raceId].js or pages/[raceId].tsx
"use client";
import Navbar from "@/app/components/Navbar";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Page: NextPage = (raceId) => {
  // const router = useRouter();
  // const { raceId } = router.query;

  return (
    <div>
      <Navbar />
      <h1>Race Details</h1>
      {/* <p>Race ID: {raceId}</p> */}

      {/* You can use raceId in this page component */}
    </div>
  );
};

export default Page;
