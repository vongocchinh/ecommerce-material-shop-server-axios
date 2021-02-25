import * as typeUser from "./../../../constant/user";

var initialState = {};
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeUser.getUserDetailSuccess:
      state = action.user;
      return state;
    default:
      return state;
  }
};
export default myReducer;
