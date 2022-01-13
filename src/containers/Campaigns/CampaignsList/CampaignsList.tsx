import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Campaign } from "../../../store/types";
import CampaignsFilter from "../CampaignsFilter/CampaignsFilter";
import CampaignCard from "../CampaignCard/CampaignCard";
import "./CampaignsList.scss";

const CampaignsList: React.FC = () => {
  const selectedCampaigns: Campaign[] = useSelector((state: RootState) => {
    const campaigns = state.campaigns.campaigns;
    const term = state.campaigns.searchTerm;
    const sortBy = state.campaigns.sortBy;

    if (term) {
      const filtered = Object.values(campaigns).filter((cmp) => {
        return cmp.title.includes(term) || cmp.description.includes(term);
      });

      return filtered;
    }

    if (sortBy) {
      return Object.values(campaigns).sort((a: any, b: any) => {
        if (sortBy === "ascending") {
          return a.rating - b.rating;
        } else if (sortBy === "descending") {
          return b.rating - a.rating;
        } else {
          return 0;
        }
      });
    }

    return Object.values(campaigns);
  });

  return (
    <section className="campaigns-list">
      <CampaignsFilter />
      <div className="list">
        {selectedCampaigns.length ? (
          selectedCampaigns.map((cmp) => {
            return <CampaignCard key={cmp.id} campaign={cmp}></CampaignCard>;
          })
        ) : (
          <div style={{ fontSize: "1.5rem", fontWeight: "500", alignSelf: "center", margin: "2rem" }}>
            Campaign Not Found
          </div>
        )}
      </div>
    </section>
  );
};

export default CampaignsList;
