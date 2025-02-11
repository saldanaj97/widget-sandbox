import { useEffect, useState } from "react";

interface WeatherData {
  current: {
    cloud: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    feelslike_c: number;
    feelslike_f: number;
    is_day: 0 | 1;
    temp_c: number;
    temp_f: number;
  };
  location: {
    name: string;
    region: string;
    country: string;
  };
}

const LoadingSkeleton = () => (
  <div className="animate-pulse">
    <h2 className="mb-2.5 h-2 w-full rounded-full bg-white/10" />
    <p className="mb-2.5 h-2 w-full rounded-full bg-white/10" />
    <p className="mb-2.5 h-2 w-full rounded-full bg-white/10" />
  </div>
);

const WeatherDisplay = ({ weather }: { weather: WeatherData }) => (
  <div className="flex w-full flex-col gap-2">
    <div className="flex flex-col justify-center">
      <h2 className="text-right text-4xl font-semibold">
        {weather.location.name}
      </h2>
      <h2 className="text-right text-2xl text-white/40">
        {weather.location.country}
      </h2>
    </div>
    <p className="text-8xl font-bold">{weather.current.temp_c}°C</p>
  </div>
);

export const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=Dallas`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        setWeather(await response.json());
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  if (!weather) return null;

  return (
    <div className="relative h-[300px] w-[300px] overflow-hidden rounded-2xl shadow-2xl">
      <div className="absolute inset-0 flex flex-col items-center justify-evenly bg-[#242424] p-8">
        {weather ? <WeatherDisplay weather={weather} /> : <LoadingSkeleton />}
      </div>
    </div>
  );
};
