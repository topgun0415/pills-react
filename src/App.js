/** @format */

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Test1 from "./components/Main-Chris/Test1";
import Test2 from "./components/Main-Chris/Test2";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test1" element={<Test1 />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/test3" />
          <Route path="/test4" />
          <Route path="/test5" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
