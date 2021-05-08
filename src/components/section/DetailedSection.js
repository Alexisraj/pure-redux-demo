/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

const DetailedSection = (props) => {
  return (
    <div>
      <a className="close" href="#" onClick={() => props.closePopup()}>
        <img src="./images/close.png" alt="close" />
      </a>
      <div>
        <h4 className="Header">The detailed Report for {props.selectedDay}</h4>
        <div className="tableSection">
          <table className="tg">
            <thead>
              <tr>
                <th className="tg-2fdn">Day</th>
                <th className="tg-0lax">
                  <span>{props.selectedDay}</span>
                </th>
                <th className="tg-0lax" colSpan="2">
                  <i className={`wi ${props.weatherIcon} display-4`} />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tg-0lax">Max</td>
                <td className="tg-0lax">
                  <span>{props.selectedDayMax}&deg;</span>
                </td>
                <td className="tg-0lax">Min</td>
                <td className="tg-0lax">
                  <span>{props.selectedDayMin}&deg;</span>
                </td>
              </tr>
              <tr>
                <td className="tg-0lax">Rain</td>
                <td className="tg-0lax">
                  <span>{props.canBeRain}</span>
                </td>
                <td className="tg-0lax">Thunderstorm</td>
                <td className="tg-0lax">
                  <span>{props.thunderstorm}</span>
                </td>
              </tr>
              <tr>
                <td className="tg-0lax">Cloud</td>
                <td className="tg-0lax">
                  <span>{props.cloudDenses}</span>
                </td>
                <td className="tg-0lax">Fog</td>
                <td className="tg-0lax">No</td>
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
