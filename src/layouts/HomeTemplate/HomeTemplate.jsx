import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

function HomeTemplate() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default HomeTemplate;
