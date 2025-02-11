import { useEffect, useState } from "react";

export const ClockWidget = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[300px] w-[300px] overflow-hidden rounded-2xl shadow-2xl">
      {/* Background layer with tick marks */}
      <div className="absolute inset-0">
        <SecondTickMarks currentSecond={date.getSeconds()} />
      </div>
      {/* Time and emoji container */}
      <div className="absolute inset-0 m-2.5 flex flex-col items-center justify-center gap-2 bg-[#242424]">
        <div className="flex flex-col">
          <p className="space-x-0 text-center text-8xl font-bold text-white">
            {
              date
                .toLocaleTimeString([], {
                  hour: "numeric",
                  minute: "2-digit",
                })
                .split(" ")[0]
            }
          </p>
        </div>
      </div>
    </div>
  );
};

const SecondTickMarks = ({ currentSecond }: { currentSecond: number }) => {
  return (
    <div className="relative h-full w-full">
      {Array.from({ length: 60 }).map((_, i) => {
        const diff = (i - currentSecond + 60) % 60; // Distance from current second
        const isInRange = diff <= 20; // Keep more ticks in range

        // Calculate opacity based on distance from current second
        let opacity;
        if (diff === 0) {
          // Highlight the current second
          opacity = 1;
        } else if (diff < 2) {
          // Hide marks that are immediately in front
          opacity = 0;
        } else {
          // Fade in the marks beyond
          opacity = Math.min(0.05 + (diff - 8) * 0.04, 1);
        }

        return (
          <div
            key={i}
            className={`absolute top-0 left-1/2 h-[300px] transition-all duration-700 ease-in-out ${
              i === currentSecond
                ? "w-1 bg-white opacity-100"
                : "w-0.5 bg-white/50"
            }`}
            style={{
              transform: `rotate(${i * 6}deg) translateY(-145px)`,
              transformOrigin: "center",
              opacity: isInRange ? Math.max(opacity, 0) : 1, // Ensure it fades outside the range
            }}
          />
        );
      })}
    </div>
  );
};
