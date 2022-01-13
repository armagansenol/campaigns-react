import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Main.scss";

const Main: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="main">
        <Sidebar />
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default Main;
