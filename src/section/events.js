import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Events = () => {
  const [history, setHistory] = useState("Today is awesome day !");
  const [startDate, setStartDate] = useState(new Date());
  const searchHistory = (selectdate) => {
    console.log("test date");
    console.log(selectdate);
    setStartDate(selectdate);
    const month = selectdate.getMonth() + 1;
    const date = selectdate.getDate();
    // console.log(`Selected Month is:${month}`);
    // console.log(`Selected Date is:${date}`);

    axios
      .get(`http://numbersapi.com/${month}/${date}/date`)
      .then((res) => {
        const history = res.data;
        console.log(history);
        setHistory(history);
      })
      .catch((error) => {
        return "Nothing happend today !";
      });
  };
  useEffect(() => {
    searchHistory(new Date());
  }, []);

  return (
    <>
      <h1>Historical Events</h1>
      <span>Pick a date: </span>
      <DatePicker
        selected={startDate}
        onChange={(date) => searchHistory(date)}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
      <br />
      <div style={{ paddingTop: "30px" }}>
        <span>{history}</span>
      </div>
    </>
  );
};

export default Events;
