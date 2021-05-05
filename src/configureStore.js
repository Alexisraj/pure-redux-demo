import WeatherReducer from "../src/container/reducers";
import { createStore } from "redux";

const persistState = (state) => {
  const serializedState = JSON.stringify(state);
  if (serializedState) localStorage.setItem("state", serializedState);
};
const rehydrateState = () => {
  const localState = localStorage.getItem("state");
  if (!localStorage) return undefined;
  return JSON.parse(localState);
};

export default function configureStore(initialState) {
  const store = createStore(WeatherReducer, initialState || rehydrateState());
  store.subscribe(() => persistState(store.getState()));
  return store;
}
