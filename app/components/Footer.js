import styles from "./footer.module.css";
import {
  FaTwitterSquare,
  FaYoutubeSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import { SiGooglemybusiness } from "react-icons/si";
import Button from "./Button";

const Footer = ({ data }) => {
  const officeHours = data?.nfcptSettings.nfcptSettings.officeHours;
  const hours = officeHours?.map((item, i) => (
    <li key={i}>
      {item.day.dayOfWeek}: {item.day.opens} - {item.day.closes}
    </li>
  ));

  const contactInfo = data?.nfcptSettings.nfcptSettings.contactInfo;

  const infoMenu = data?.menus.edges[0].node;
  const infoMenuNodes = infoMenu?.menuItems.nodes;
  const infoMenuItems = infoMenuNodes?.map((item) => (
    <li key={item.url}>
      <a href={item.url}>{item.label}</a>
    </li>
  ));

  return (
    <footer className="footer">
      <div className="container">
        <div className="upperFooter">
          <div>
            <span className="headline">Get The Settlement You Deserve.</span>
            <span className="description">
              We work closely with attorneys to ensure you get the settlement
              you deserve.
            </span>
          </div>
          <div className="btnWrap">
            <div className="flex">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <a href="/about-us">
                  <Button
                    color="white"
                    textColor="var(--grey75)"
                    borderColor="var(--grey05)"
                  >
                    Our Wellness Plan
                  </Button>
                </a>
                <a href="/get-started">
                  <Button
                    color="var(--accentColor)"
                    borderColor="var(--accentColor)"
                    textColor="white"
                  >
                    Get Started
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="innerFooter">
          <div>
            <p className="h4">Office Hours</p>
            <ul>{hours}</ul>
          </div>
          <div>
            <p className="h4">{infoMenu?.name}</p>
            <ul>{infoMenuItems}</ul>
          </div>
          <div>
            <p className="h4">Connect</p>
            <ul>
              <li>
                <a
                  className="social"
                  href="https://www.google.com/search?q=North+Florida+Chiropractic+Physical+Therapy#lpstate=pid:-1"
                >
                  <span className="icon">
                    <SiGooglemybusiness />
                  </span>
                  <span>Google</span>
                </a>
              </li>
              <li>
                <a
                  className="social"
                  href="https://www.facebook.com/northfloridachiropracticphysicaltherapy/"
                >
                  <span className="icon">
                    <FaFacebookSquare />
                  </span>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a className="social" href="https://youtube.com">
                  <span className="icon">
                    <FaYoutubeSquare />
                  </span>
                  <span>YouTube</span>
                </a>
              </li>
              <li>
                <a className="social" href="https://twitter.com/NFLChiro">
                  <span className="icon">
                    <FaTwitterSquare />
                  </span>
                  <span>Twitter</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="h4">Contact Info</p>
            <ul>
              <li className="bold">{contactInfo?.businessName}</li>
              <li>{contactInfo?.address}</li>
              <li>{contactInfo?.cityStateZip}</li>
              <li>
                Tel: <a href="tel: 9042724329">{contactInfo?.phone}</a>
              </li>
              <li>Fax: {contactInfo?.fax}</li>
            </ul>
          </div>
        </div>
        <div className="colophon">
          <div>
            &copy;2021{" "}
            <a href="/">North Florida Chiropractic Physical Therapy</a>
          </div>
          <div className="credits">
            Site by <a href="https://stevebarakat.com">S.Barakat</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
