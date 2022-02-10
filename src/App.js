import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Appbar } from "./components/Appbar";
import { Report } from "./view/Report";
import { Customize } from "./view/Customize";
import { Test } from "./view/Test";
import { Home } from "./view/Home";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/report" element={<Report />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
