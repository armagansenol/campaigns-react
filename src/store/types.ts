// Action Types
export enum ActionType {
  ADD_CAMPAIGN = "add_campaign",
  UPDATE_CAMPAIGN = "update_campaign",
  DELETE_CAMPAIGN = "delete_campaign",
  FETCH_CAMPAIGNS = "fetch_campaigns",
  SEARCH_CAMPAIGNS = "search_campaigns",
  SORT_CAMPAIGNS = "sort_campaigns",
  //  FETCH_CAMPAIGN_BY_ID = "fetch_campaign_by_id",
  SAVE_CAMPAIGNS = "save_campaigns",
  SET_CAMPAIGNID_TO_EDIT = "set_campaignid_to_edit",
  UPDATE_CAMPAIGN_RATING = "update_campaign_rating",
  SHOW_MODAL = "show_modal",
  HIDE_MODAL = "hide_modal",
  LOGIN = "login",
  LOGOUT = "logout",
}

// Models
export interface Campaign {
  id: string;
  title: string;
  description: string;
  rating: number;
  creationDate: Date;
}

export interface Campaigns {
  [id: string]: Campaign;
}

// State
export interface CampaignsState {
  campaigns: Campaigns;
  campaignToEdit: Campaign | null;
  searchTerm?: string | null;
  sortBy?: string | null;
}

export interface ModalState {
  isModalShown: boolean;
}

// Action Types
interface AddCampaignAction {
  type: typeof ActionType.ADD_CAMPAIGN;
  payload: Campaign;
}

interface FetchCampaignsAction {
  type: typeof ActionType.FETCH_CAMPAIGNS;
}

/* interface GetCampaignByIdAction {
  type: typeof ActionType.FETCH_CAMPAIGN_BY_ID;
  payload: string;
} */

interface SetCampaignIdToEditAction {
  type: typeof ActionType.SET_CAMPAIGNID_TO_EDIT;
  payload: string;
}

interface DeleteCampaignAction {
  type: typeof ActionType.DELETE_CAMPAIGN;
  payload: string;
}

interface UpdateCampaignAction {
  type: typeof ActionType.UPDATE_CAMPAIGN;
  payload: {
    id: string;
    title: string;
    description: string;
  };
}

interface SearchCampaignsAction {
  type: typeof ActionType.SEARCH_CAMPAIGNS;
  payload: {
    searchTerm: string;
  };
}

interface SortCampaignsAction {
  type: typeof ActionType.SORT_CAMPAIGNS;
  payload: {
    sortBy: string;
  };
}

interface UpdateCampaignRatingAction {
  type: typeof ActionType.UPDATE_CAMPAIGN_RATING;
  payload: {
    id: string;
    rating: number;
  };
}

interface ShowModalAction {
  type: typeof ActionType.SHOW_MODAL;
}

interface HideModalAction {
  type: typeof ActionType.HIDE_MODAL;
}

interface LoginAction {
  type: typeof ActionType.LOGIN;
  payload: {
    username: string;
    password: string;
  };
}

interface LogoutAction {
  type: typeof ActionType.LOGOUT;
}

export type Action =
  | AddCampaignAction
  | FetchCampaignsAction
  // | GetCampaignByIdAction
  | SetCampaignIdToEditAction
  | DeleteCampaignAction
  | UpdateCampaignAction
  | UpdateCampaignRatingAction
  | ShowModalAction
  | HideModalAction
  | LoginAction
  | LogoutAction
  | SearchCampaignsAction
  | SortCampaignsAction;
