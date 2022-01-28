import React, { useContext, useEffect } from "react";
import PageLayout from "../components/Redesign/PageLayout2";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";
import { SolarContext } from "../context/SolarContext";

const TestimonialsPage = () => {
  const { testimonials, fetchTestimonials } = useContext(SolarContext);
  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);
  return (
    <PageLayout>
      <TestimonialsSection t={testimonials} />
    </PageLayout>
  );
};

export default TestimonialsPage;
