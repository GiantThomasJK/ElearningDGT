import React from "react";
import Carousel from "common/components/Carousel";
import Course from "features/courses/Course";
import InfoBox from "common/components/InfoBox/InfoBox";
import Categories from "common/components/Categories/Categories";
import ActionBox from "common/components/ActionBox";
import FooterPage from "common/components/Footer";
import Header from "common/components/Header";
function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <InfoBox />
      <Categories />
      <Course />
      <ActionBox />
      <FooterPage />
    </>
  );
}

export default Home;
