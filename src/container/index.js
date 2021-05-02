import { connect } from "react-redux";
import App from "../App";
import * as actions from "./actions";

const mapStateToProps = (state) => {
  return {
    weeklyData: state.weeklyData,
    selectedData: state.selectedData,
    showPopup: state.showPopup,
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
