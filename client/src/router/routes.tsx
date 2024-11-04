import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage, ContactPage } from "../pages";
import { LoadingIndicator } from "../components/LoadingIndicator";
import { ScrollToTop } from "../components/ScrollToTop";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const AppRouter: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};
