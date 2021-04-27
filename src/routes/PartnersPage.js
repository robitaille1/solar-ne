import React, { useContext, useEffect } from "react";
import PageLayout from "../containers/PageLayout/PageLayout";
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
