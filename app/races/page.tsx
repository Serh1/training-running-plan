import React from "react";
import Navbar from "../components/Navbar";
import { prisma } from "../db";
import { Race } from "@prisma/client";
import Link from "next/link";

export default async function Page() {
  const races = await prisma.race.findMany();

  return (
    <>
      <Navbar />
      <div className="container">
        <div>Races</div>
        <div className="grid grid-cols-auto-fill gap-3 grid-cols-3">
          {races.map((race) => (
            <div
              key={race.id}
              className="rounded-md bg-slate-200 shadow-md flex row-auto p-4"
            >
              <div className="container">
                <div className="text-xl font-bold">{race.name} Marathon</div>
                <div className="flex gap-1">
                  <div className="text-blue-400 font-bold">
                    {race.distance} kilometers
                  </div>
                </div>
                <div>{race.date.toLocaleDateString()}</div>
              </div>
              <div className="flex right-0 transform hover:scale-110 duration-75 items-center">
                {/* Use Link to navigate to /races/{race.id} */}
                <Link href={`/races/${race.id}`}>
                  <div className="flex bg-blue-400 text-white p-2 rounded-md shadow-md mt-2 font-bold">
                    Join
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
