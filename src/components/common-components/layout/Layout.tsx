import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../../../containers/header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
