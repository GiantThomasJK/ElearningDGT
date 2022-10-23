import React, { useEffect } from "react";
import Carousel from "common/components/Carousel";
import Course from "features/courses/Course";
import InfoBox from "common/components/InfoBox/InfoBox";
import Categories from "common/components/Categories/Categories";
import ActionBox from "common/components/ActionBox";
import FooterPage from "common/components/Footer";
import Header from "common/components/Header";
import { useDispatch } from "react-redux";
import { fetchUserProfileAction } from "redux/User/authAction";
function Home() {
  const dispatch = useDispatch();
  const fetchUserProfile = async () => {
    await dispatch(fetchUserProfileAction());
  };
  useEffect(() => {
    fetchUserProfile();
  }, []);

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
