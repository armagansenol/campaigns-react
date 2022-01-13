import React from "react";
import { useDispatch } from "react-redux";
import { deleteCampaign } from "../../../store/actions";
import "./CampaignDelete.scss";

export interface CampaignDeleteProps {
  campaignId: string;
  toggleModal: any;
}

const CampaignDelete: React.FC<CampaignDeleteProps> = ({ campaignId, ...props }) => {
  const dispatch = useDispatch();

  return (
    <div className="modal-content">
      <h1>Are your sure you want to delete this campaign?</h1>
      <div className="buttons">
        <a onClick={() => dispatch(deleteCampaign(campaignId))}>Yes</a>
        <a onClick={props.toggleModal}>No</a>
      </div>
    </div>
  );
};

export default CampaignDelete;
