import "./CampaignCard.scss";
import upArrow from "../../../assets/arrow-up-outline.svg";
import downArrow from "../../../assets/arrow-down-outline.svg";

import { Campaign } from "../../../store/types";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sortCampaigns, updateCampaignRating } from "../../../store/actions";
import Modal from "../../Modal/Modal";
import { useModal } from "../../../hooks/useModal";
import CampaignsEdit from "../CampaignsEdit/CampaignsEdit";
import CampaignDelete from "../CampaignDelete/CampaignDelete";

interface CampaignCardProps {
  campaign: Campaign;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
  const dispatch = useDispatch();
  const { isShown, toggle } = useModal();
  const [rating, setRating] = useState<number>(campaign.rating);
  const [modalType, setModalType] = useState<string | null>(null);

  useEffect(() => {
    dispatch(updateCampaignRating(campaign.id, rating));
  }, [rating]);

  const updateRating = (updateType: string) => {
    // dispatch(sortCampaigns(null));
    if (updateType === "increase") {
      setRating(rating + 1);
    } else if (updateType === "decrease" && rating > 0) {
      setRating(rating - 1);
    }
  };

  const openModal = (modalType: string) => {
    setModalType(modalType);
    toggle();
  };

  const formattedDate = campaign.creationDate;

  /*   const formattedDate = `${campaign.creationDate.getDay()} ${
    campaign.creationDate.getMonth() + 1
  } ${campaign.creationDate.getFullYear()}`; */

  return (
    <div className="campaign-card">
      <div className="rating-wrapper flex-col-center">
        <div className="rating flex-col-center">
          <p>{rating}</p>
          <small>Puan</small>
        </div>
        <div className="rating-buttons flex-row-center">
          <div onClick={() => updateRating("increase")}>
            <img src={upArrow} alt="" />
          </div>
          <div onClick={() => updateRating("decrease")}>
            <img src={downArrow} alt="" />
          </div>
        </div>
      </div>
      <div className="campaign-content">
        <small>Oluşturulma Tarihi: date</small>
        <h2>{campaign.title}</h2>
        <p>{campaign.description}</p>
        <div className="campaign-actions">
          <button onClick={() => openModal("EDIT_MODAL")}>Güncelle</button>
          <button onClick={() => openModal("DELETE_MODAL")}>Sil</button>
        </div>
      </div>
      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={
          modalType === "DELETE_MODAL" ? (
            <CampaignDelete campaignId={campaign.id} toggleModal={toggle} />
          ) : (
            <CampaignsEdit campaign={campaign} toggleModal={toggle} />
          )
        }
      />
    </div>
  );
};

export default CampaignCard;
