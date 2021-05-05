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
        <div className="iconStyle">
          <i className={`wi ${props.weatherIcon} display-4`} />
        </div>

        <p className="smallDesc">{props.desc}</p>
        <hr />
        <div style={{ display: "flex", height: "50px" }}>
          <p
            style={{ left: "10px", position: "absolute" }}
          >{`${maxVal}\u00b0`}</p>{" "}
          <p
            style={{ right: "10px", position: "absolute" }}
          >{`${minVal}\u00b0`}</p>
        </div>
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
  desc: PropTypes.any,
  onClick: PropTypes.any,
};
