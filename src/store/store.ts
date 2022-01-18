import { loadState, saveState } from "../helpers/localStorage";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "./reducers/authReducer";
import campaignsReducer from "./reducers/campaignsReducer";
import modalReducer from "./reducers/modalReducer";
import { throttle } from "lodash";

const rootReducer = combineReducers({
  campaigns: campaignsReducer,
  modal: modalReducer,
  auth: authReducer,
});

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, composeWithDevTools());

store.subscribe(
  throttle(() => {
    saveState({
      campaigns: store.getState().campaigns,
      auth: store.getState().auth,
    });
  }, 1000)
);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
