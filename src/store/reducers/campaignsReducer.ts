import { Action, ActionType, Campaigns, CampaignsState } from "../types";

const initialState: CampaignsState = {
  campaigns: {},
  campaignToEdit: null,
  searchTerm: null,
  sortBy: null,
};

const campaignsReducer = (state = initialState, action: Action): CampaignsState => {
  switch (action.type) {
    case ActionType.ADD_CAMPAIGN:
      state.campaigns[action.payload.id] = action.payload;
      return { ...state };
    case ActionType.FETCH_CAMPAIGNS:
      return { ...state };
    case ActionType.SET_CAMPAIGNID_TO_EDIT:
      const campaignToEdit = state.campaigns[action.payload] || null;
      return {
        ...state,
        campaignToEdit,
      };
    case ActionType.DELETE_CAMPAIGN:
      delete state.campaigns[action.payload];
      return {
        ...state,
      };
    case ActionType.UPDATE_CAMPAIGN:
      state.campaigns[action.payload.id].title = action.payload.title;
      state.campaigns[action.payload.id].description = action.payload.description;
      return {
        ...state,
        campaignToEdit: null,
      };
    case ActionType.UPDATE_CAMPAIGN_RATING:
      state.campaigns[action.payload.id].rating = action.payload.rating;
      return {
        ...state,
      };
    case ActionType.SEARCH_CAMPAIGNS:
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
      };
    case ActionType.SORT_CAMPAIGNS:
      return {
        ...state,
        sortBy: action.payload.sortBy,
      };
    default:
      return state;
  }
};

export default campaignsReducer;
