import React from "react";
import PropTypes from "prop-types";

const DetailedSection = (props) => {
  let videUrl = "./video/Beach.mp4";
  if (props.thunderstorm) videUrl = "./video/Thunderstorm.mp4";
  return (
    <div>
      <a className="close" href="#" onClick={() => props.closePopup()}>
        <img src="./images/close.png" alt="close" />
      </a>
      <span>{props.selectedDayMin}</span>
      <span>{props.selectedDayMax}</span>
      <span>{props.selectedDay}</span>
      <span>{props.thunderstorm}</span>
      <span>{props.canBeRain}</span>
      <span>{props.cloudDenses}</span>
      <div>
        <i className={`wi ${props.weatherIcon} display-4`} />
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
  selectedDayMax: PropTypes.any,
  selectedDayMin: PropTypes.any,
  selectedDay: PropTypes.any,
  thunderstorm: PropTypes.any,
  canBeRain: PropTypes.any,
  cloudDenses: PropTypes.any,
  closePopup: PropTypes.any,
  weatherIcon: PropTypes.any,
};
