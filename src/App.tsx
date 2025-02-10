import "./App.css";
import { Clock } from "./Clock";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">Clock Widget</h1>
        <Clock />
      </div>
    </>
  );
}

export default App;
