import { useState } from "react";
import "./App.css";
import { CalenderWidget } from "./Calender";
import { ClockWidget } from "./Clock";

function App() {
  const [widgetToDisplay, setWidgetToDisplay] = useState("clock");

  const WidgetButtons = () => {
    return (
      <>
        {widgetToDisplay !== "clock" && (
          <button
            className="rounded-2xl bg-black p-4"
            onClick={() => setWidgetToDisplay("clock")}
          >
            Clock
          </button>
        )}
        {widgetToDisplay !== "calender" && (
          <button
            className="rounded-2xl bg-black p-4"
            onClick={() => setWidgetToDisplay("calender")}
          >
            Calender
          </button>
        )}
      </>
    );
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8">
        {widgetToDisplay === "clock" && (
          <>
            <h1 className="text-6xl font-bold">Clock Widget</h1>
            <ClockWidget />
          </>
        )}
        {widgetToDisplay === "calender" && (
          <>
            <h1 className="text-6xl font-bold">Calender Widget</h1>
            <CalenderWidget />
          </>
        )}
        <WidgetButtons />
      </div>
    </>
  );
}

export default App;
