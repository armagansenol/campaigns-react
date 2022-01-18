import { Action, ActionType, Campaign } from "../types";

export const addCampaign = (campaign: Campaign): Action => {
  return {
    type: ActionType.ADD_CAMPAIGN,
    payload: campaign,
  };
};

export const fetchCampaigns = (): Action => {
  return {
    type: ActionType.FETCH_CAMPAIGNS,
  };
};

/* export const fetchCampaignById = (id: string): Action => {
  return {
    type: ActionType.FETCH_CAMPAIGN_BY_ID,
    payload: id,
  };
}; */

export const setCampaignIdToEdit = (id: string): Action => {
  return {
    type: ActionType.SET_CAMPAIGNID_TO_EDIT,
    payload: id,
  };
};

export const deleteCampaign = (id: string): Action => {
  return {
    type: ActionType.DELETE_CAMPAIGN,
    payload: id,
  };
};

export const updateCampaign = (id: string, title: string, description: string): Action => {
  return {
    type: ActionType.UPDATE_CAMPAIGN,
    payload: { id, title, description },
  };
};

export const updateCampaignRating = (id: string, rating: number): Action => {
  return {
    type: ActionType.UPDATE_CAMPAIGN_RATING,
    payload: { id, rating },
  };
};

export const searchCampaigns = (searchTerm: string): Action => {
  return {
    type: ActionType.SEARCH_CAMPAIGNS,
    payload: searchTerm,
  };
};

export const sortCampaigns = (sortBy: string | null): Action => {
  return {
    type: ActionType.SORT_CAMPAIGNS,
    payload: sortBy,
  };
};
