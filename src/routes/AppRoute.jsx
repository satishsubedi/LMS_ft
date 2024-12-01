import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
// import HomePage from "../pages/home/HomePage";
// import DashboardPage from "../pages/dashboard/DashboardPage";
import { HomePage, DashboardPage } from "../pages";
const AppRoute = () => {
  return (
    <Routes>
      {/* public page */}
      <Route path="/" element={<HomePage />}></Route>
      {/* private page */}
      <Route path="/user" element={<DashboardPage />}></Route>
    </Routes>
  );
};

export default AppRoute;
