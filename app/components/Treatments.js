import React from "react";
import chiro from "../images/chiro.svg";
import figure from "../images/figure2.svg";

const Treatments = ({ footerData }) => {
  const { disorders } = footerData;
  return (
    <div className="treatmentsWrap">
      <div className="container">
        <h2 className="h2">Injuries & Conditions We Treat</h2>
        <div className="disordersWrap">
          <div>Whiplash</div>
          <div>Tendonitis & Bursitis</div>
          <div>Migraine Headaches</div>
          <img src={figure} alt="disorders" />
          <div>Pinched Nerve</div>
          <div>Hip & Joint Pain</div>
          <div>Sciatica & Herniated Disk</div>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
