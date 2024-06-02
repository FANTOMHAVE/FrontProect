// UslugiList.js
import React from "react";
import { UslugiData } from "../helpers/UslugiData";
import ServiceButton from "../components/ServiceButton";

function UslugiList() {
  const lechenie = UslugiData.filter(usluga => usluga.id >= 1 && usluga.id <= 5);
  const dlyaDetey = UslugiData.filter(usluga => usluga.id >= 6 && usluga.id <= 10);
  const diagnostika = UslugiData.filter(usluga => usluga.id >= 11 && usluga.id <= 15);
  const khirurgiya = UslugiData.filter(usluga => usluga.id >= 16 && usluga.id <= 20);

  return (
    <div className="listOfUslug">
      <div id="block31">
        <h1>Лечение</h1>
        <div id="block311">
          <div id="block3111">
            {lechenie.map(uslugi => (
              <ServiceButton key={uslugi.id} uslugi={uslugi} />
            ))}
          </div>
        </div>
      </div>
      <div id="block31">
        <h1>Для детей</h1>
        <div id="block311">
          <div id="block3111">
            {dlyaDetey.map(uslugi => (
              <ServiceButton key={uslugi.id} uslugi={uslugi} />
            ))}
          </div>
        </div>
      </div>
      <div id="block31">
        <h1>Диагностика</h1>
        <div id="block311">
          <div id="block3111">
            {diagnostika.map(uslugi => (
              <ServiceButton key={uslugi.id} uslugi={uslugi} />
            ))}
          </div>
        </div>
      </div>
      <div id="block31">
        <h1>Хирургия</h1>
        <div id="block311">
          <div id="block3111">
            {khirurgiya.map(uslugi => (
              <ServiceButton key={uslugi.id} uslugi={uslugi} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UslugiList;
