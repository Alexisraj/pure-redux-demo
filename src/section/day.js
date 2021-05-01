import PropTypes from "prop-types";

function Day(props) {
  return <div>{props.title}</div>;
}

export default Day;
Day.propTypes = {
  title: PropTypes.any,
};
