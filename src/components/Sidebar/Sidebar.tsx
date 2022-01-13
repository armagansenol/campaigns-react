import { Link } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar: React.FC = () => {
  return (
    <section className="sidebar">
      <div className="sidebar-item">
        <Link to="new-campaign">Create Campaign</Link>
      </div>
      <div className="sidebar-item">
        <Link to="campaigns-list">All Campaigns</Link>
      </div>
    </section>
  );
};

export default Sidebar;
