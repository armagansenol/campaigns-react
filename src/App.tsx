import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import Login from "./containers/Auth/Login/Login";
import RequireAuth from "./hocs/RequireAuth";
import CampaignsCreate from "./containers/Campaigns/CampaignsCreate/CampaignsCreate";
import CampaignsList from "./containers/Campaigns/CampaignsList/CampaignsList";
import Main from "./containers/Main/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Main />
              </RequireAuth>
            }
          >
            <Route path="/new-campaign" element={<CampaignsCreate />} />
            <Route path="/campaigns-list" element={<CampaignsList />} />
          </Route>
        </Routes>
      </Router>
      <div id="modal"></div>
    </div>
  );
}

export default App;
