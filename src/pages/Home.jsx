import React from "react";
import Banner from "../components/Banner";
import MainServices from "../components/MainServices";
import Services from "../components/Services";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {data} from "../helpers/data";
import {Link} from "react-router-dom";
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
      <Feedback/><br />
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
       
        </div>
        </>
    )
}