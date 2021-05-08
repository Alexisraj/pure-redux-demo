import Day from "./day";
import Modal from "react-awesome-modal";
import WeatherContext from "../Context/WeatherContext";
import { useContext } from "react";
import DetailedSection from "./DetailedSection";
import "./weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";

function WeekDays() {
  const props = useContext(WeatherContext);

  const getSelectedDay = (id) =>
    props.weeklyData?.weekDays?.find((d) => d.id === id);

  const onClickHandler = (selectedDayId) => {
    const data = getSelectedDay(selectedDayId);

    const newData = {
      selectedDay: data.title,
      selectedDayMin: data.tempMin,
      selectedDayMax: data.tempMax,
      selectedDayRangeId: data.rangeId,
      selectedWeatherType: data.desc,
      selectedWeatherIcon: get_WeatherIcon(weatherIcon, data.rangeId),
    };
    props.UpdateSelectedData(newData);
  };
  const weatherIcon = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog",
  };
  const get_WeatherIcon = (icons, rangeId) => {
    let icon = undefined;
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        icon = icons.Thunderstorm;
        break;
      case rangeId >= 300 && rangeId <= 321:
        icon = icons.Drizzle;
        break;
      case rangeId >= 500 && rangeId <= 521:
        icon = icons.Rain;
        break;
      case rangeId >= 600 && rangeId <= 622:
        icon = icons.Snow;
        break;
      case rangeId >= 701 && rangeId <= 781:
        icon = icons.Atmosphere;
        break;
      case rangeId === 800:
        icon = icons.Clear;
        break;
      case rangeId >= 801 && rangeId <= 804:
        icon = icons.Clouds;
        break;
      default:
        icon = icons.Clouds;
    }
    return icon;
  };

  return (
    <>
      <div className="rowC">
        {props?.weeklyData?.weekDays?.map((d) => (
          <Day
            key={`Day-${d.id}`}
            title={d.title}
            min={d.tempMin}
            max={d.tempMax}
            desc={d.desc}
            weatherIcon={get_WeatherIcon(weatherIcon, d.rangeId)}
            onClick={() => onClickHandler(d.id)}
          />
        ))}
      </div>

      <Modal
        visible={props.showPopup}
        width="600px"
        height="600px"
        effect="fadeInUp"
        onClickAway={() => props.clearSelectedData()}
      >
        <div className="detailsPop">
          <DetailedSection />
        </div>
      </Modal>
    </>
  );
}

export default WeekDays;
