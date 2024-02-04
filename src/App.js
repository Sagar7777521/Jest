import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  return (
    <div className="App">
      <h1>Test on Change Event with Input Text</h1>
      <input
        type="text"
        value={data}
        onChange={(e) => {
          setData(e.target.value + "test");
        }}
      />
    </div>
  );
}

export default App;
