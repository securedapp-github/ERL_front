import React from "react";
import Landing from "../Components/Landing";
import Contactus from "../Components/Contactus";
import Footer from "../Components/Footer";
import HorizontalRoadmap from "../Components/HorizontalRoadmap";
import VerticalRoadmap from "../Components/VerticalRoadmap";

export default function Home() {
  return (
    <div className="bg-black mt-12">
      <Landing />
      <HorizontalRoadmap />
      <VerticalRoadmap />
      <Contactus />
      <Footer />
    </div>
  );
}
