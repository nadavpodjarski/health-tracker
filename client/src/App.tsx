import React from "react";
import "./App.css";
import Drawer from "./modules/drawer";
import Routes from "./main/routes";
import { Provider } from "react-redux";
import store from "./main/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Drawer>
          <Routes />
        </Drawer>
      </div>
    </Provider>
  );
}

export default App;
