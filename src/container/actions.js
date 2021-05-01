export function UpdateWeeklyData(data) {
  return {
    type: "UPDATE_WEEK_DATA",
    weekData: data,
  };
}
export function UpdateSelectedData(data) {
  return {
    type: "UPDATE_PARTICULAR_DATE",
    selectedData: data,
  };
}
export function clearSelectedData() {
  return {
    type: "CLEAR_SELECTED_DATA",
  };
}
