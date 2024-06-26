import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
// pages
import FirstExample from "./pages/FirstExample";
import SecondExample from "./pages/SecondExample";
import ThirdExample from "./pages/ThirdExample";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          top: "5%",
        }}
      >
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="firstexample" element={<FirstExample />} />
        <Route path="secondexample" element={<SecondExample />} />
        <Route path="thirdexample" element={<ThirdExample />} />
      </Routes>
    </div>
  );
}

export default App;
