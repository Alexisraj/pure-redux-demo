import React from "react";
import PropTypes from "prop-types";

const DetailedSection = (props) => {
  let videUrl = "./video/Beach.mp4";
  if (props.thunderstorm) videUrl = "./video/Thunderstorm.mp4";
  return (
    <div>
      <a href="#" onClick={() => props.closePopup()}>
        Close
      </a>
      <span>{props.min}</span>
      <span>{props.max}</span>
      <span>{props.selectedDay}</span>
      <span>{props.thunderstorm}</span>
      <span>{props.canBeRain}</span>
      <span>{props.cloudDenses}</span>
      <div>
        {props.thunderstorm && (
          <video
            width="200px"
            height="200px"
            src={videUrl}
            muted
            loop
            autoPlay
          />
        )}
      </div>
    </div>
  );
};

export default DetailedSection;
DetailedSection.prototypes = {
  min: PropTypes.any,
  max: PropTypes.any,
  selectedDay: PropTypes.any,
  thunderstorm: PropTypes.any,
  canBeRain: PropTypes.any,
  cloudDenses: PropTypes.any,
  closePopup: PropTypes.any,
};
