import React from "react";
import Banner from "../components/Banner";
import MainServices from "../components/MainServices";
import Services from "../components/Services";
import Feedback from "../components/Feedback";

export default function Home () {
    return (
      <>
      <br /><br />
      <Banner/>
      <div id="block0"></div>
      <Services/><br /> <br />
      <div id="block0"></div>
      <MainServices/><br /><br />
      <div id="block0"></div>
      <Feedback/>
        </>
    )
}