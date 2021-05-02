import Header from "../src/components/header/header";
import Body from "../src/components/body/body";
import Footer from "../src/components/footer/footer";
import WeatherContext from "../src/components/Context/WeatherContext";
import { stubbedResponse } from "./components/Modal/stubbedResponse";

function App(props) {
  if (!props.weeklyData) {
    console.log(`props.weeklydata is null`);
    props.UpdateWeeklyData(stubbedResponse);
  }
  return (
    <div>
      <Header />
      <WeatherContext.Provider value={props}>
        <Body />
      </WeatherContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
