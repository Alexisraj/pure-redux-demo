const initialState = {
  weeklyData: false,
  selectedData: false,
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
        selectedData: action.selectedData,
        showPopup: !!action.selectedData,
      };
    case "CLEAR_SELECTED_DATA":
      return {
        ...state,
        selectedData: false,
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
