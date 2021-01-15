import React, { useContext, useEffect } from "react";
import PageLayout from "../containers/PageLayout/PageLayout";
import ResourcesSection from "../components/ResourcesSection/ResourcesSection";
import { SolarContext } from "../context/SolarContext";

const ResourcesPage = () => {
  const { fetchResourcesPage, resourcesPage } = useContext(SolarContext);

  useEffect(() => {
    fetchResourcesPage();
  }, [fetchResourcesPage]);

  return (
    <PageLayout>
      <ResourcesSection content={resourcesPage.Content} />
    </PageLayout>
  );
};

export default ResourcesPage;
