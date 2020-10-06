import React from "react";
import "./App.css";
import Drawer from "./modules/drawer";
import Routes from "./main/routes";

function App() {
  return (
    <div className="App">
      <Drawer>
        <Routes />
      </Drawer>
    </div>
  );
}

export default App;
