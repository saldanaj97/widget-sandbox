import { useEffect, useState } from "react";

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  const SecondTickMarks = () => {
    return (
      <div className="relative h-full w-full">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 left-1/2 h-[300px] w-0.5 bg-white"
            style={{
              transform: `rotate(${i * 6}deg) translateY(-145px)`, // Move tick outward
              transformOrigin: "center",
            }}
          />
        ))}
      </div>
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Widget container */}
      <div className="relative h-[300px] w-[300px] overflow-hidden rounded-2xl shadow-2xl">
        {/* Background layer with tick marks */}
        <div className="absolute inset-0">
          <SecondTickMarks />
        </div>
        {/* Time and emoji container */}
        <div className="absolute inset-0 m-2 flex flex-col items-center justify-center gap-2 bg-[#242424]">
          <div>
            <p className="text-5xl">{"☀️"}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-center text-5xl">
              {date.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
