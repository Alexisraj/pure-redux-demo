import PropTypes from "prop-types";
import "./weather.css";
import WeatherContext from "../Context/WeatherContext";
import { useContext } from "react";

function Day(props) {
  const minVal = props.min || "20";
  const maxVal = props.max || "30";
  const data = useContext(WeatherContext);
  return (
    <div className="card" onClick={props.onClick}>
      <div className="container">
        <h4 style={{ textAlign: "center" }}>{props.title.substring(0, 3)}</h4>
        <hr />
        <div>dsfg</div>
        {data.selectedData && <span>{data.selectedData}</span>}
        <hr />
        <div style={{ width: "20px" }}>
          <div>
            <span>{`${maxVal}\u00b0`}</span>
          </div>
          <div style={{ right: 0 }}>
            <span>{`${minVal}\u00b0`}</span>
          </div>
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
  onClick: PropTypes.any,
};
