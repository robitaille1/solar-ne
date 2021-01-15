import React, { useContext, useEffect } from "react";
import PageLayout from "../containers/PageLayout/PageLayout";
import InvestorsSection from "../components/InvestorsSection/InvestorsSection";
import { SolarContext } from "../context/SolarContext";

const InvestorsPage = () => {
  const { fetchInvestorsPage, investorsPage } = useContext(SolarContext);

  useEffect(() => {
    fetchInvestorsPage();
  }, [fetchInvestorsPage]);

  return (
    <PageLayout>
      <InvestorsSection content={investorsPage.Content} />
    </PageLayout>
  );
};

export default InvestorsPage;
