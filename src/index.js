import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import WeatherReducer from "../src/container/reducers";
import MainComp from "../src/container/index";
import { createStore } from "redux";

const store = createStore(WeatherReducer);

ReactDOM.render(
  <Provider store={store}>
    <MainComp />
  </Provider>,
  document.getElementById("root")
);
