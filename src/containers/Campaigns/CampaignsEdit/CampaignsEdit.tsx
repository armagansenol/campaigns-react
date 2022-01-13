import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCampaigns, sortCampaigns, updateCampaign } from "../../../store/actions";
import { Campaign } from "../../../store/types";
import "./CampaignsEdit.scss";

interface CampaignEditProps {
  campaign: Campaign;
  toggleModal: any;
}

const CampaignsEdit: React.FC<CampaignEditProps> = ({ campaign, ...props }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>(campaign.title);
  const [description, setDescription] = useState<string>(campaign.description);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // dispatch(searchCampaigns(""));
    // dispatch(sortCampaigns(""));
    dispatch(updateCampaign(campaign.id, title, description));
    props.toggleModal();
  };

  return (
    <div className="modal-content">
      <div className="modal-header">
        <h1>Kampanya Güncelle</h1>
        <button className="modal-close" onClick={props.toggleModal}>
          Kapat
        </button>
      </div>
      <form className="form flex-col-center" onSubmit={onSubmit}>
        <div className="form-input">
          <label htmlFor="title">Kampanya İsmi</label>
          <input id="title" name="title" type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div className="form-input">
          <label htmlFor="description">Kampanya Açıklaması</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>
        <button type="submit">Güncelle</button>
      </form>
    </div>
  );
};

export default CampaignsEdit;
