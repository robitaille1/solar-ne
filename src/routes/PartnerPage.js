import React, { useState, useEffect } from 'react';
import PageLayout from '../components/Redesign/PageLayout2';
import PartnerSection from '../components/PartnerSection/PartnerSection';
import { useParams } from 'react-router-dom';
import { partners } from '../constants/partners';

const PartnerPage = () => {
  const [partner, setPartner] = useState();

  let params = useParams();
  const partnerSlug = params.partnerSlug;

  useEffect(() => {
    setPartner(partners.filter((p) => p.slug === partnerSlug));
  }, [partnerSlug]);

  let showPartner = <div>Loading</div>;

  if (partner) {
    showPartner = <PartnerSection partner={partner} />;
  }

  return <PageLayout>{showPartner}</PageLayout>;
};

export default PartnerPage;
