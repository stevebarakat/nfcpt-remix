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
            <div className="item-left" style={{ top: "6.5rem" }}>
              <a href="https://github.com/">To a link to a to link to Github</a>
              <div
                className="line-left"
                style={{ transform: "rotate(30deg)" }}
              ></div>
            </div>
            <div className="item-left" style={{ top: "14rem" }}>
              <a href="https://github.com/">Here's a link to Github</a>
              <div
                className="line-left"
                style={{ transform: "rotate(22deg)" }}
              ></div>
            </div>
            <div className="item-left" style={{ top: "20rem" }}>
              <a href="https://github.com/">Another Link To Github</a>
              <div
                className="line-left"
                style={{ transform: "rotate(15deg)" }}
              ></div>
            </div>
            <div className="item-left" style={{ top: "25rem" }}>
              <a href="https://github.com/">Link to Github</a>
              <div
                className="line-left"
                style={{ transform: "rotate(-15deg)" }}
              ></div>
            </div>
            <div className="item-left" style={{ top: "31rem" }}>
              <a href="https://github.com/">
                Here's a link to a link to Github
              </a>
              <div
                className="line-left"
                style={{ transform: "rotate(-8deg)" }}
              ></div>
            </div>
          </div>

          <img src={figure} alt="alt text here" />

          <div className="items-right">
            <div className="item-right" style={{ top: "1.5rem" }}>
              <div
                className="line-right"
                style={{
                  transform: "rotate(-35deg)",
                  width: "200px",
                  marginLeft: "-2.3rem",
                }}
              ></div>
              <a href="https://github.com/">Here's a link to Github</a>
            </div>
            <div className="item-right" style={{ top: "10.5rem" }}>
              <div
                className="line-right"
                style={{ transform: "rotate(-25deg)" }}
              ></div>
              <a href="https://github.com/">Here's a link to Github</a>
            </div>
            <div className="item-right" style={{ top: "17rem" }}>
              <div
                className="line-right"
                style={{ transform: "rotate(-15deg)" }}
              ></div>
              <a href="https://github.com/">Link to Github</a>
            </div>
            <div className="item-right" style={{ top: "23.25rem" }}>
              <div
                className="line-right"
                style={{ transform: "rotate(5deg)" }}
              ></div>
              <a href="https://github.com/">To Github</a>
            </div>
            <div className="item-right" style={{ top: "28rem" }}>
              <div
                className="line-right"
                style={{ transform: "rotate(12.5deg)" }}
              ></div>
              <a href="https://github.com/">
                Here's a link to a link to a link to Github
              </a>
            </div>
            <div className="item-right" style={{ top: "36rem" }}>
              <div
                className="line-right"
                style={{ transform: "rotate(25deg)" }}
              ></div>
              <a href="https://github.com/">Here's a link to Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
