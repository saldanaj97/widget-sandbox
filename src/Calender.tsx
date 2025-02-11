import { useEffect, useState } from "react";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const CalenderWidget = () => {
  const [date, setDate] = useState(new Date());
  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const date_num = date.getDate();

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="relative h-[300px] w-[300px] overflow-hidden rounded-2xl shadow-2xl">
        <div className="absolute inset-0 flex flex-col items-center justify-evenly bg-[#242424] p-4">
          <p className="text-6xl font-bold text-white">{month}</p>
          <p className="text-6xl font-bold text-white">{date_num}</p>
          <p className="text-3xl font-semibold text-white">{day}</p>
        </div>
      </div>
    </>
  );
};
