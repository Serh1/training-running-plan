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
  const plan = [] as object[];

  let weekDaysCopy = [...weekDays];
  for (let i = 0; i < weeks; i++) {
    const max = Math.random() < 0.3 ? minRunsPerWeek : maxRunsPerWeek;
    weekDaysCopy = [...weekDays];
    const week = [
      {
        day: "Monday",
        type: "Rest",
        distance: 0,
      },
      {
        day: "Tuesday",
        type: "Rest",
        distance: 0,
      },
      {
        day: "Wednesday",
        type: "Rest",
        distance: 0,
      },
      {
        day: "Thursday",
        type: "Rest",
        distance: 0,
      },
      {
        day: "Friday",
        type: "Rest",
        distance: 0,
      },
      {
        day: "Saturday",
        type: "Rest",
        distance: 0,
      },
      {
        day: "Sunday",
        type: "Rest",
        distance: 0,
      },
      {
        day: "Total",
        type: "",
        distance: 0,
      },
    ];

    for (let j = 0; j < max; j++) {
      const index = Math.floor(Math.random() * weekDaysCopy.length);
      const selectedDay = weekDaysCopy[index];
      weekDaysCopy.splice(index, 1);

      const run = {
        day: selectedDay as string,
        type: runningTypes[
          Math.floor(Math.random() * runningTypes.length)
        ] as string,
        distance: Math.floor(Math.random() * distance + distance / 4) as number,
      };

      week.map((day) => {
        if (day["day"] === selectedDay) {
          day["type"] = run.type;
          day["distance"] = run.distance;
        }
      });
    }

    let totalDistance = 0;
    week.map((day) => {
      if (day["type"] !== "Rest") {
        totalDistance += day["distance"];
      }
    });
    week[7]["distance"] = totalDistance;

    plan.push(week);
  }

  plan[weeks - 1][6].type = "RACE DAY";
  plan[weeks - 1][6].distance = distance;

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
            bg-gray-200 h-full container mb-2 px-4 flex justify-center items-center p-4 rounded-xl"
          >
            Week#{plan.indexOf(week) + 1}
            {week.map((run) => {
              return (
                <div className="flex-col  w-full ">
                  <li className="flex flex-row-reverse justify-center items-center m-2 bg-blue-500 text-white rounded-sm">
                    {run.day}
                  </li>
                  <li className="flex flex-row-reverse justify-center items-center m-2 bg-teal-800 text-white rounded-sm">
                    {run.type === "Rest"
                      ? run.type
                      : run.distance + "K " + run.type}
                  </li>
                </div>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
}

export default generatePlan;
