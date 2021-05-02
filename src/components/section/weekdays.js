import Day from "./day";
import Modal from "react-awesome-modal";
import WeatherContext from "../Context/WeatherContext";
import { useContext, useState } from "react";
import "./weather.css";

function WeekDays() {
  const data = useContext(WeatherContext);

  const [clickedDay, setclickedDay] = useState(false);
  const onClick = (day) => {
    data.UpdateSelectedData(day);
    setclickedDay(clickedDay);
  };
  // console.log(data);

  return (
    <>
      <h1>User Name: {data.userName}</h1>
      <a href="#" onClick={() => data.updateUserName("Raj")}>
        UpdateName
      </a>
      <h1>{data.selectedData} has been Clicked</h1>
      <div className="rowC">
        {data?.weeklyData?.weekDays?.map((d) => (
          <Day
            key={`Day-${d.id}`}
            title={d.title}
            onClick={() => onClick(d.title)}
          />
        ))}
      </div>
      <Modal
        visible={data.showPopup}
        width="400px"
        height="400px"
        effect="fadeInUp"
        onClickAway={() => data.clearSelectedData()}
      >
        <div style={{ margin: "20px" }}>
          <h1>{data.selectedData} has been Clicked</h1>
          <div style={{ right: 5, top: "20px", position: "absolute" }}>
            <a href="#" onClick={() => data.clearSelectedData()}>
              Close
            </a>
          </div>
          <div className="ContainerDetail">
            <h2>Thunderstorm expected</h2>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default WeekDays;
