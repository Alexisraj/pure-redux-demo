import { connect } from "react-redux";
import App from "../App";
import * as actions from "./actions";

const mapStateToProps = (state) => {
  return {
    weeklyData: state.weeklyData,
    showPopup: state.showPopup,
    selectedDay: state.selectedDay,
    selectedDayMin: state.selectedDayMin,
    selectedDayMax: state.selectedDayMax,
    selectedDayRangeId: state.selectedDayRangeId,
    selectedWeatherType: state.selectedWeatherType,
    selectedWeatherIcon: state.selectedWeatherIcon,
    userName: state.user,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    UpdateWeeklyData: (data) => dispatch(actions.UpdateWeeklyData(data)),
    UpdateSelectedData: (data) => dispatch(actions.UpdateSelectedData(data)),
    clearSelectedData: () => dispatch(actions.clearSelectedData()),
    updateUserName: (name) =>
      dispatch({ type: "UPDATE_USER_NAME", name: name }),
  };
};
const MainComp = connect(mapStateToProps, mapDispachToProps)(App);
export default MainComp;
