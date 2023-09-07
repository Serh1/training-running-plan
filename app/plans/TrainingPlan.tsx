import React from "react";

const runningTypes = ["Easy", "Tempo", "Interval", "Long Run"];
const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function generatePlan(distance: number, weeks: number, runsPerWeek: string) {
  const runsPerWeekArray = runsPerWeek.split("-");
  const minRunsPerWeek = parseInt(runsPerWeekArray[0]);
  const maxRunsPerWeek = parseInt(runsPerWeekArray[1]);
  const plan = [];

  let weekDaysCopy = [...weekDays];
  for (let i = 0; i < weeks; i++) {
    const week = [];
    const max = Math.random() < 0.3 ? minRunsPerWeek : maxRunsPerWeek;
    weekDaysCopy = [...weekDays];

    for (let j = 0; j < max; j++) {
      const index = Math.floor(Math.random() * weekDaysCopy.length);
      const selectedDay = weekDaysCopy[index];
      weekDaysCopy.splice(index, 1);
      const run = {
        day: selectedDay ?? "Other",
        type: runningTypes[Math.floor(Math.random() * runningTypes.length)],
        distance: Math.floor(Math.random() * distance + distance / 4),
      };
      weekDaysCopy.splice(index, 1);

      week.push(run);
    }

    plan.push(week);
  }

  plan.map((week) => {
    week.sort((a, b) => {
      const dayOrder = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
      return dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day);
    });
  });
  console.log(plan);

  return (
    <div className="">
      {plan.map((week) => {
        return (
          <ul
            className="
          bg-slate-100 h-full container mb-2 px-4 
      flex justify-center items-center p-4 rounded
          "
          >
            Week #{plan.indexOf(week) + 1} :
            {week.map((run) => {
              return (
                <li className="flex flex-row-reverse justify-center items-center m-2">
                  {run.day} {run.type} {run.distance}K,
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
}

export default generatePlan;
