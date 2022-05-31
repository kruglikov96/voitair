import React from "react";
import { Navigate, Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";

import Layout from "./components/common-components/layout/Layout";
import MainPage from "./pages/page1-mainPage/MainPage";
import AromaMarketingPage from "./pages/page2-aromaMarketing/AromaMarketingPage";
import AromaForBussinesPage from "./pages/page3-aromaForBussines/AromaForBussinesPage";
import AromaEquipmentPage from "./pages/page4-aromaEquipment/AromaEquipmentPage";
import NotFoundPage from "./pages/not-found-page/NotFoundPage";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate replace to="/main" />} />
          <Route path="main" element={<MainPage />} />
          <Route path="marketing" element={<AromaMarketingPage />} />
          <Route path="bussines" element={<AromaForBussinesPage />} />
          <Route path="equipment" element={<AromaEquipmentPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
