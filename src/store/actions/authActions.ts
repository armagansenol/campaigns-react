import { Action, ActionType } from "../types";

export const login = (username: string, password: string): Action => {
  return {
    type: ActionType.LOGIN,
    payload: { username, password },
  };
};

export const logout = (): Action => {
  return {
    type: ActionType.LOGOUT,
  };
};
