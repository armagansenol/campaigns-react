import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchCampaigns, sortCampaigns } from "../../../store/actions";
import "./CampaignsFilter.scss";
import _ from "lodash";

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

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const campaignsList = document.querySelector(".campaigns-list");

    const handleScroll = (event: any) => {
      event.target.scrollTop > 20 ? setOpacity(0) : setOpacity(1);
    };
    campaignsList?.addEventListener("scroll", _.throttle(handleScroll, 200), { passive: true });

    return () => campaignsList?.removeEventListener("scroll", handleScroll);
  }, [opacity]);

  return (
    <div className="campaigns-filter" style={{ opacity }}>
      <input
        className="searchbar"
        type="text"
        name="searchData"
        placeholder="Kampanya Arayın"
        value={term}
        onChange={handleChange}
      />

      <select className="select" name="sortCampaigns" onChange={handleSelect}>
        <option value="" selected disabled hidden>
          Puana Göre Sırala
        </option>
        <option value="descending">Yüksek Puandan Düşük Puana</option>
        <option value="ascending">Düşük Puandan Yüksek Puana</option>
      </select>
    </div>
  );
};

export default CampaignsFilter;
