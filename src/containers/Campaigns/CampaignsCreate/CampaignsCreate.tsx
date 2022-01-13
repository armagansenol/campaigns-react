import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCampaign } from "../../../store/actions";
import "./CampaignsCreate.scss";

const CampaignsCreate: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const date = new Date();

    const campaign = {
      title,
      description,
      id: date.getTime().toString(),
      rating: 0,
      creationDate: date,
    };

    dispatch(addCampaign(campaign));
    navigate("/campaigns-list");
  };

  return (
    <section className="campaigns-create">
      <div className="create-campaign flex-col-center">
        <h1>Kampanya Oluştur</h1>
        <form className="form flex-col-center" onSubmit={onSubmit}>
          <div className="form-input">
            <label htmlFor="campaignTitle">Kampanya İsmi</label>
            <input id="campaignTitle" name="campaignTitle" type="text" onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="form-input">
            <label htmlFor="campaignDescription">Kampanya Açıklaması</label>
            <textarea
              id="campaignDescription"
              name="campaignDescription"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Oluştur</button>
        </form>
      </div>
    </section>
  );
};

export default CampaignsCreate;
