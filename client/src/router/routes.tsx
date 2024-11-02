import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, ContactPage } from "../pages";
import { GeneratePage } from "../pages/GeneratePage";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/generate" element={<GeneratePage/>} />
    </Routes>
  );
};
