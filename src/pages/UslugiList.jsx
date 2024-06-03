import React from "react";
import { UslugiData } from "../helpers/UslugiData";
import ServiceButton from "../components/ServiceButton";

function UslugiList() {
  const lechenie = UslugiData.filter(usluga => usluga.id >= 1 && usluga.id <= 5);
  const dlyaDetey = UslugiData.filter(usluga => usluga.id >= 6 && usluga.id <= 10);
  const diagnostika = UslugiData.filter(usluga => usluga.id >= 11 && usluga.id <= 15);
  const khirurgiya = UslugiData.filter(usluga => usluga.id >= 16 && usluga.id <= 20);

  return (
    <>
    <br />
      <div id="block31">
        <h1>Лечение</h1>
        <div id="block311">
          <div>
            {lechenie.map(uslugi => (
              <ServiceButton key={uslugi.id} uslugi={uslugi} />
            ))}
          </div>
        </div>
      </div>
      <br /> 
      <div id="block0"></div>
      <br />
      <div id="block31">
        <h1>Для детей</h1>
        <div id="block311">
          <div>
            {dlyaDetey.map(uslugi => (
              <ServiceButton key={uslugi.id} uslugi={uslugi} />
            ))}
          </div>
        </div>
      </div>
      <br /> 
      <div id="block0"></div>
      <br />
      <div id="block31">
        <h1>Диагностика</h1>
        <div id="block311">
          <div>
            {diagnostika.map(uslugi => (
              <ServiceButton key={uslugi.id} uslugi={uslugi} />
            ))}
          </div>
        </div>
      </div>
      <br /> 
      <div id="block0"></div>
      <br />
      <div id="block31">
        <h1>Хирургия</h1>
        <div id="block311">
          <div>
            {khirurgiya.map(uslugi => (
              <ServiceButton key={uslugi.id} uslugi={uslugi} />
            ))}
          </div>
        </div>
      </div>
      <br /> 
      </>
  );
}

export default UslugiList;
