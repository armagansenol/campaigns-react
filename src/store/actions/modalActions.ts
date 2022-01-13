import { Action, ActionType } from "../types";

export const showModal = (): Action => {
  return {
    type: ActionType.SHOW_MODAL,
  };
};

export const hideModal = (): Action => {
  return {
    type: ActionType.HIDE_MODAL,
  };
};
