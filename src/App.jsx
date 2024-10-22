import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [history, setHistory] = useState(["https://pokeapi.co/api/v2/pokemon"]);

  return (
    <div id="app">
      <Navbar />
      <Outlet context={[history, setHistory]} />
    </div>
  );
}

export default App;
