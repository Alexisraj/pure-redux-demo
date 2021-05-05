/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

const DetailedSection = (props) => {
  // let videUrl = "./video/Beach.mp4";
  // if (props.thunderstorm) videUrl = "./video/Thunderstorm.mp4";
  return (
    <div>
      <a className="close" href="#" onClick={() => props.closePopup()}>
        <img src="./images/close.png" alt="close" />
      </a>
      <div>
        <h4 className="Header">The detailed Report for {props.selectedDay}</h4>
        <div className="tableSection">
          <table class="tg">
            <thead>
              <tr>
                <th class="tg-2fdn">Day</th>
                <th class="tg-0lax">
                  <span>{props.selectedDay}</span>
                </th>
                <th class="tg-0lax" colspan="2">
                  <i className={`wi ${props.weatherIcon} display-4`} />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="tg-0lax">Max</td>
                <td class="tg-0lax">
                  <span>{props.selectedDayMax}&deg;</span>
                </td>
                <td class="tg-0lax">Min</td>
                <td class="tg-0lax">
                  <span>{props.selectedDayMin}&deg;</span>
                </td>
              </tr>
              <tr>
                <td class="tg-0lax">Rain</td>
                <td class="tg-0lax">
                  <span>{props.canBeRain}</span>
                </td>
                <td class="tg-0lax">Thunderstorm</td>
                <td class="tg-0lax">
                  <span>{props.thunderstorm}</span>
                </td>
              </tr>
              <tr>
                <td class="tg-0lax">Cloud</td>
                <td class="tg-0lax">
                  <span>{props.cloudDenses}</span>
                </td>
                <td class="tg-0lax">Fog</td>
                <td class="tg-0lax">No</td>
              </tr>
            </tbody>
          </table>
        </div>
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
