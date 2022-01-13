import { ActionType, Action } from "./../types";

const initialState = false;

const authReducer = (state = initialState, action: Action): boolean => {
  switch (action.type) {
    case ActionType.LOGIN:
      return true;
    case ActionType.LOGOUT:
      return false;
    default:
      return state;
  }
};

export default authReducer;
