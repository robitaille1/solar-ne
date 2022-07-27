import React, { useContext, useEffect } from "react";
import PageLayout from "../components/Redesign/PageLayout2";
import CareersSection from "../components/CareersSection/CareersSection";
import { SolarContext } from "../context/SolarContext";

const CareersPage = () => {
  const { fetchCareersPage, careersPage } = useContext(SolarContext);

  useEffect(() => {
    fetchCareersPage();
  }, [fetchCareersPage]);

  return (
    <PageLayout>
      <CareersSection content={careersPage.Content} />
    </PageLayout>
  );
};

export default CareersPage;
