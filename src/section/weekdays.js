import Day from "./day";

const weekD = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function WeekDays() {
  return weekD.map((d) => <Day key={`Day-${d}`} title={d} />);
}

export default WeekDays;
