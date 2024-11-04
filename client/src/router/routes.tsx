import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, ContactPage } from "../pages";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};
