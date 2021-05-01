import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import WeatherReducer from "../src/container/reducers";
import MainComp from "../src/container/index";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";

const store = createStore(WeatherReducer);

ReactDOM.render(
  <Provider store={store}>
    <MainComp />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
