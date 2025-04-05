import React from "react";
import { JustinSection } from "../../components/section/JustinSection.jsx";
import { BestReadSection } from "../../components/section/BestReadSection.jsx";
import { RecommendationSection } from "../../components/section/RecommendationSection.jsx";
import { CustomCarousel } from "../../components/customcarousel/CustomCarousel.jsx";
import { Col, Container, Row } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container>
      {/* Hero Section */}

      <CustomCarousel />
      {/* justinin section */}
      <JustinSection />
      {/* best section */}
      <BestReadSection />
      {/* Recommedation section */}
      <RecommendationSection />
    </Container>
  );
};

export default HomePage;
