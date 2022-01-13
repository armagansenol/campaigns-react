import { ModalState, ActionType, Action } from "./../types";

const initialState: ModalState = {
  isModalShown: false,
};

const modalReducer = (state = initialState, action: Action): ModalState => {
  switch (action.type) {
    case ActionType.SHOW_MODAL:
      return { ...state, isModalShown: true };
    case ActionType.HIDE_MODAL:
      return { ...state, isModalShown: false };
    default:
      return state;
  }
};

export default modalReducer;
