import React from "react";
import { useParams } from "react-router-dom";
import { UslugiData } from "../helpers/UslugiData";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function UslugiDisplay() {
  const { id } = useParams();
  const uslugi = UslugiData.find((u) => u.id === parseInt(id));

  return (
    <>
      <div id="block3">
        <br/>
        <div style={{ display: "flex" }}>
          <div>
            <img src={uslugi.image} alt={uslugi.name} width="189" height="255"></img>
          </div>
          <div id="blocku">
            <p><font size="4">
              <b>Имя:</b> {uslugi.firstname}<br/>
              <br/>
              <b>Фамилия:</b> {uslugi.lastname}<br/>
              <br/>
              <b>Врач:</b> {uslugi.prof}<br/>
            </font></p>
            <br/><br/><br/><br/>
            <Button component={Link} to="/feed" className="nav-button">
              <font size="5" color="darkcyan" face="Impact">Записаться</font>
            </Button>
          </div>
        </div>
        <br />
        <center>
          <h1>{uslugi.name}</h1>
        </center>
        <div dangerouslySetInnerHTML={{ __html: uslugi.description }}></div>
        <br />
        <center>
        <div dangerouslySetInnerHTML={{ __html: uslugi.price }}></div>
        </center>
      </div>
      
    </>
  );
}

export default UslugiDisplay;
/*
<div className="uslugiDisplay">
        <h1>{uslugi.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: uslugi.description }}></div>
        <p>Цена: {uslugi.price}</p>
      </div>
      */
