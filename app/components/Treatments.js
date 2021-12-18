import React from "react";
import chiro from "../images/chiro.svg";
import figure from "../images/figure2.svg";

const Treatments = ({ footerData }) => {
  const { disorders } = footerData;
  return (
    <div className="treatmentsWrap">
      <div className="container">
        <h2 className="h2">Injuries & Conditions We Treat</h2>

        <div className="infographic">
          <div className="items-left">
            <div className="item-left" style={{ top: "0" }}>
              <a href="https://github.com/">Whiplash</a>
              <div
                className="line-left"
                style={{ transform: "rotate(30deg)" }}
              ></div>
            </div>
            <div className="item-left" style={{ top: "20%" }}>
              <a href="https://github.com/">Sciatica</a>
              <div
                className="line-left"
                style={{ transform: "rotate(22deg)" }}
              ></div>
            </div>
            <div className="item-left" style={{ top: "40%" }}>
              <a href="https://github.com/">Carpal Tunnel</a>
              <div
                className="line-left"
                style={{ transform: "rotate(15deg)" }}
              ></div>
            </div>
            <div className="item-left" style={{ top: "60%" }}>
              <a href="https://github.com/">Link to Github</a>
              <div
                className="line-left"
                style={{ transform: "rotate(-15deg)" }}
              ></div>
            </div>
            <div className="item-left" style={{ top: "80%" }}>
              <a href="https://github.com/">Pinched Nerve</a>
              <div
                className="line-left"
                style={{ transform: "rotate(-8deg)" }}
              ></div>
            </div>
          </div>

          <img src={figure} alt="alt text here" />

          <div className="items-right">
            <div className="item-right" style={{ top: "0" }}>
              <div
                className="line-right"
                style={{
                  transform: "rotate(-35deg)",
                  marginLeft: "-2.3rem",
                }}
              ></div>
              <a href="https://github.com/">Neck Pain</a>
            </div>
            <div className="item-right" style={{ top: "20%" }}>
              <div
                className="line-right"
                style={{ transform: "rotate(-25deg)" }}
              ></div>
              <a href="https://github.com/">Back Pain</a>
            </div>
            <div className="item-right" style={{ top: "40%" }}>
              <div
                className="line-right"
                style={{ transform: "rotate(-15deg)" }}
              ></div>
              <a href="https://github.com/">Hip Pain</a>
            </div>
            <div className="item-right" style={{ top: "60%" }}>
              <div
                className="line-right"
                style={{ transform: "rotate(5deg)" }}
              ></div>
              <a href="https://github.com/">Migraine Headaches</a>
            </div>
            <div className="item-right" style={{ top: "80%" }}>
              <div
                className="line-right"
                style={{ transform: "rotate(12.5deg)" }}
              ></div>
              <a href="https://github.com/">Sports Injuries</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
