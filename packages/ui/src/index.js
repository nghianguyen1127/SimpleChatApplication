import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import rootReducers from "./redux/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

//here we create an object to store the current state of the application
const store = createStore(rootReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
