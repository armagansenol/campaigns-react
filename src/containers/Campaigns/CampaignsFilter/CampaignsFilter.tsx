import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchCampaigns, sortCampaigns } from "../../../store/actions";
import "./CampaignsFilter.scss";

export interface CampaignsFilterProps {
  filter: (term: string) => void;
  sort: (term: string) => void;
}

const CampaignsFilter: React.FC = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");

  useEffect(() => {
    dispatch(searchCampaigns(term));
  }, [term, dispatch]);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTerm(event.currentTarget.value);
  };

  const handleSelect = (event: React.FormEvent<HTMLSelectElement>) => {
    dispatch(sortCampaigns(event.currentTarget.value));
  };

  return (
    <div className="campaigns-filter">
      <input
        className="searchbar"
        type="text"
        name="searchData"
        placeholder="Kampanya Arayın"
        value={term}
        onChange={handleChange}
      />

      <select className="select" name="sortCampaigns" onChange={handleSelect}>
        <option value="default" selected disabled hidden>
          Puana Göre Sırala
        </option>
        <option value="descending">Yüksek Puandan Düşük Puana</option>
        <option value="ascending">Düşük Puandan Yüksek Puana</option>
      </select>
    </div>
  );
};

export default CampaignsFilter;
