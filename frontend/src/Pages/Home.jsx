import React from "react";
import Landing from "../Components/Landing";
import Contactus from "../Components/Contactus";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className="bg-black mt-12">
      <Landing />
      <Contactus />
      <Footer />
    </div>
  );
}
