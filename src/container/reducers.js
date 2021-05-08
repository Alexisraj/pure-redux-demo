const initialState = {
  weeklyData: false,
  selectedDay: false,
  selectedDayMin: false,
  selectedDayMax: false,
  selectedDayRangeId: false,
  selectedWeatherType: false,
  showPopup: false,
  user: "Alex",
};

const WeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_WEEK_DATA":
      return {
        ...state,
        weeklyData: action.weekData,
      };
    case "UPDATE_PARTICULAR_DATE":
      return {
        ...state,
        selectedDay: action.selectedData.selectedDay,
        selectedDayMin: action.selectedData.selectedDayMin,
        selectedDayMax: action.selectedData.selectedDayMax,
        selectedDayRangeId: action.selectedData.selectedDayRangeId,
        selectedWeatherType: action.selectedData.selectedWeatherType,
        showPopup: !!action.selectedData,
      };
    case "CLEAR_SELECTED_DATA":
      return {
        ...state,
        selectedData: false,
        selectedDay: false,
        selectedDayMin: false,
        selectedDayMax: false,
        selectedDayRangeId: false,
        selectedWeatherType: false,
        showPopup: false,
      };
    case "UPDATE_USER_NAME":
      return {
        ...state,
        user: action.name,
      };
    default:
      return initialState;
  }
};

export default WeatherReducer;
