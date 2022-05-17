/** @format */

import "./App.css";
import MainNav from "./MainNav";
import MainScripts from "./MainScripts";
import React from "react";

function App() {
  return (
    <>
      <div className="App">
        {/* <ImageBackground src="/images/main.jpg" /> */}
        <MainNav />
        <MainScripts />
      </div>
    </>
  );
}

export default App;
