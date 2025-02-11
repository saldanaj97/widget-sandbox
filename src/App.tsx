import { useState } from "react";
import "./App.css";
import { CalenderWidget } from "./widgets/Calender";
import { ClockWidget } from "./widgets/Clock";
import { WeatherWidget } from "./widgets/Weather";

type WidgetType = "all" | "clock" | "calender" | "weather";

interface WidgetConfig {
  id: WidgetType;
  title: string;
  component: React.ComponentType;
}

const widgets: WidgetConfig[] = [
  { id: "clock", title: "Clock Widget", component: ClockWidget },
  { id: "calender", title: "Calender Widget", component: CalenderWidget },
  { id: "weather", title: "Weather Widget", component: WeatherWidget },
];

function App() {
  const [widgetToDisplay, setWidgetToDisplay] = useState<WidgetType>("all");

  const WidgetButtons = () => (
    <div className="flex flex-row gap-4">
      {widgetToDisplay !== "all" && (
        <button
          className="rounded-2xl bg-white p-4 text-black"
          onClick={() => setWidgetToDisplay("all")}
        >
          All
        </button>
      )}
      {widgets.map(
        ({ id, title }) =>
          widgetToDisplay !== id && (
            <button
              key={id}
              className="rounded-2xl bg-black p-4"
              onClick={() => setWidgetToDisplay(id)}
            >
              {title.split(" ")[0]}
            </button>
          ),
      )}
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {widgetToDisplay === "all" ? (
        <div className="flex flex-row gap-8">
          {widgets.map(({ id, component: Component }) => (
            <Component key={id} />
          ))}
        </div>
      ) : (
        widgets.map(
          ({ id, title, component: Component }) =>
            widgetToDisplay === id && (
              <div key={id} className="flex flex-col items-center gap-8">
                <h1 className="text-6xl font-bold">{title}</h1>
                <Component />
              </div>
            ),
        )
      )}
      <WidgetButtons />
    </div>
  );
}

export default App;
