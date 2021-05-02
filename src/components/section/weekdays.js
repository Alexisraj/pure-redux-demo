import Day from "./day";
import Modal from "react-awesome-modal";
import WeatherContext from "../Context/WeatherContext";
import { useContext, useState } from "react";
import DetailedSection from "./DetailedSection";
import "./weather.css";

function WeekDays() {
  const props = useContext(WeatherContext);

  const [clickedDay, setclickedDay] = useState(false);
  const onClick = (day) => {
    props.UpdateSelectedData(day);
    setclickedDay(clickedDay);
  };
  // console.log(data);

  return (
    <>
      {/* <h1>User Name: {props.userName}</h1>
      <a href="#" onClick={() => props.updateUserName("Raj")}>
        UpdateName
      </a> */}
      {props.selectedData && <h1>{props.selectedData} has been Clicked</h1>}
      <div className="rowC">
        {props?.weeklyData?.weekDays?.map((d) => (
          <Day
            key={`Day-${d.id}`}
            title={d.title}
            onClick={() => onClick(d.title)}
          />
        ))}
      </div>
      <Modal
        visible={props.showPopup}
        width="400px"
        height="400px"
        effect="fadeInUp"
        onClickAway={() => props.clearSelectedData()}
      >
        <div style={{ margin: "20px" }}>
          <DetailedSection
            selectedDay={props.selectedData}
            closePopup={props.clearSelectedData}
            thunderstorm={true}
          />
        </div>
      </Modal>
    </>
  );
}

export default WeekDays;
