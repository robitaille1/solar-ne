import React, { useState, useEffect } from "react";
import PageLayout from "../components/Redesign/PageLayout2";
import PartnerSection from "../components/PartnerSection/PartnerSection";
import { useParams } from "react-router-dom";

const PartnerPage = () => {
  const [partner, setPartner] = useState();

  let params = useParams();
  const partnerSlug = params.partnerSlug;

  useEffect(() => {
    fetch(`https://solarpowerne.herokuapp.com/partners`)
      .then((response) => response.json())
      .then((resData) => {
        setPartner(resData.filter((p) => p.slug === partnerSlug));
      });
  }, [partnerSlug]);

  let showPartner = <div>Loading</div>;

  if (partner) {
    showPartner = <PartnerSection partner={partner} />;
  }

  return <PageLayout>{showPartner}</PageLayout>;
};

export default PartnerPage;
