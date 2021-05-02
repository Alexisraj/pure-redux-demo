import PropTypes from "prop-types";
import "./weather.css";
import WeatherContext from "../Context/WeatherContext";
import { useContext } from "react";
import "weather-icons/css/weather-icons.css";

function Day(props) {
  const minVal = props.min || "20";
  const maxVal = props.max || "30";
  const data = useContext(WeatherContext);
  return (
    <div className="card" onClick={props.onClick}>
      <div className="container">
        <h4 style={{ textAlign: "center" }}>{props.title.substring(0, 3)}</h4>
        <hr />
        <div>
          <i className={`wi ${props.weatherIcon} display-4`} />
        </div>
        {data.selectedData && <span>{data.selectedData}</span>}
        <hr />
        <h4>
          <p>{`${maxVal}\u00b0`}</p> <p>{`${minVal}\u00b0`}</p>
        </h4>
      </div>
    </div>
  );
}

export default Day;
Day.propTypes = {
  cloudDense: PropTypes.any,
  title: PropTypes.any,
  max: PropTypes.any,
  min: PropTypes.any,
  onClick: PropTypes.any,
};
