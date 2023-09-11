"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import generatePlan from "./TrainingPlan";

function getRaceDistances() {
  return [5, 10, 21, 42, 50];
}

function getRaceWeeks() {
  return [7, 10, 12, 16, 20];
}

function getRaceRunsPerWeek() {
  return ["1-2", "2-3", "3-4", "4-5"];
}

export default function Page() {
  const distances = getRaceDistances();
  const weeks = getRaceWeeks();
  const runsPerWeek = getRaceRunsPerWeek();
  const [selectedDistance, setSelectedDistance] = useState<number | null>(null);
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
  const [selectedRunsPerWeek, setSelectedRunsPerWeek] = useState<string | null>(
    null
  );
  const [generatedPlan, setGeneratedPlan] = useState<string | null>(null);

  console.log(
    selectedDistance,
    selectedWeek,
    selectedRunsPerWeek,
    generatedPlan
  );

  const handleGeneratePlan = () => {
    if (selectedDistance && selectedWeek && selectedRunsPerWeek) {
      // Call the calculateTrainingPlan function to generate the plan
      const plan = generatePlan(
        selectedDistance,
        selectedWeek,
        selectedRunsPerWeek
      );
      setGeneratedPlan(plan);
    }
  };

  const handleDistanceClick = (data: any) => {
    const newData = parseInt(data.replace("K", ""));
    console.log(typeof newData);

    setSelectedDistance(newData);
  };

  const handleWeekClick = (data: number) => {
    setSelectedWeek(data);
  };

  const handleRunsPerWeekClick = (data: string) => {
    setSelectedRunsPerWeek(data);
  };

  return (
    <>
      <Navbar />
      <div>What kind of race?</div>
      <div className="bg-gray-200 h-full container flex row-auto justify-center items-center p-4 rounded-xl">
        {distances.map((distance) => (
          <Card
            data={distance.toString() + "K"}
            selected={distance === selectedDistance}
            onClick={handleDistanceClick}
          />
        ))}
      </div>
      <div>How many weeks for training?</div>
      <div className="bg-gray-200 h-full container mx-auto px-4 flex row-auto justify-center items-center p-4 rounded-xl">
        {weeks.map((week) => (
          <Card
            data={week.toString()}
            selected={week.toString() === selectedWeek?.toString()}
            onClick={handleWeekClick}
          />
        ))}
      </div>
      <div>How many runs per week?</div>
      <div className="bg-gray-200 h-full container mx-auto px-4 flex row-auto justify-center items-center p-4 rounded-xl">
        {runsPerWeek.map((runPerWeek) => (
          <Card
            data={runPerWeek}
            selected={runPerWeek === selectedRunsPerWeek}
            onClick={handleRunsPerWeekClick}
          />
        ))}
      </div>
      <div>Seleceted:</div>
      <div
        className="bg-gray-200 h-full container mx-auto px-4 
      flex row-auto justify-center items-center p-4 rounded-xl"
      >
        Your plan for
        <div
          className="flex items-center justify-center
          p-px m-2 w-20 h-20 rounded-2xl
          text-4xl shadow font-bold
           hover:scale-110 bg-blue-500 text-white"
        >
          {selectedDistance}
        </div>
        kilometers race in
        <div
          className="flex items-center justify-center
          p-px m-2 w-20 h-20 rounded-2xl
          text-4xl shadow font-bold
           hover:scale-110 bg-blue-500 text-white"
        >
          {selectedWeek}
        </div>
        weeks with
        <div
          className="flex items-center justify-center

          p-px m-2 w-20 h-20 rounded-2xl
          text-4xl shadow font-bold
           hover:scale-110 bg-blue-500 text-white"
        >
          {selectedRunsPerWeek}
        </div>
        runs per week
      </div>
      <div className="flex flex-col items-center justify-center w-full colomn p-2">
        <button
          className="flex items-center justify-center
        bg-white  p-5
         rounded-2xl h-16 
        text-4xl shadow font-bold
         hover:scale-110
        "
          onClick={handleGeneratePlan}
        >
          Generate Plan
        </button>
        {generatedPlan && (
          <div className="container mx-0">
            <h2>Your Generated Plan</h2>
            <p>{generatedPlan}</p>
          </div>
        )}
      </div>
    </>
  );
}
