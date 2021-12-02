import { Link } from "remix";
import Button from "./Button";
import ninety from "../images/ninety.svg";
import special from "../images/special.svg";

const Cta = () => {
  return (
    <div className="cta">
      <div className="grid">
        <div id="left" className="ctaLeftWrap">
          <div className="ninety">
            <img src={ninety} alt="Ninty Dollar" />
          </div>
          <img src={special} alt="New Patient Special" />
        </div>
        <div id="right" className="ctaRightWrap">
          <div>
            <span className="ctaHeader">Begin The New You</span>
            <span className="ctaSubHeader">Take the first step</span>
            <div className="ctaForm">
              <div className="flex">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Link to="/about-us">
                    <Button color="white" textColor="var(--accentColor)">
                      Our Wellness Plan
                    </Button>
                  </Link>
                  <Link to="/get-started">
                    <Button
                      color="var(--accentColor)"
                      borderColor="var(--grey05)"
                      textColor="white"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
