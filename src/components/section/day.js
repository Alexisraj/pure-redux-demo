import PropTypes from "prop-types";
import "./weather.css";

function Day(props) {
  return (
    <div className="card" onClick={() => console.log(props.title)}>
      <div className="container">
        <h4>
          <b>{props.title.substring(0, 3)}</b>
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
};
