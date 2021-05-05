import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import MainComp from "../src/container/index";
import configureStore from "./configureStore";

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <MainComp />
  </Provider>,
  document.getElementById("root")
);
