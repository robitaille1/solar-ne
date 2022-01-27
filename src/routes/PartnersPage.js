import React, { useContext, useEffect } from "react";
import PageLayout from "../components/Redesign/PageLayout2";
import PartnersSection from "../components/PartnersSection/PartnersSection";
import { SolarContext } from "../context/SolarContext";

const PartnersPage = () => {
  const { fetchPartners, partners } = useContext(SolarContext);

  useEffect(() => {
    fetchPartners();
  }, [fetchPartners]);

  return (
    <PageLayout>
      <PartnersSection partners={partners} />
    </PageLayout>
  );
};

export default PartnersPage;
