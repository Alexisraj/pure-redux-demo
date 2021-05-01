import Day from "./day";

const weekD = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
function WeekDays() {
  return (
    <div className="rowC">
      {weekD.map((d) => (
        <Day key={`Day-${d}`} title={d} />
      ))}
    </div>
  );
}

export default WeekDays;
