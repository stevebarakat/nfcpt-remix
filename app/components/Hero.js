import styles from "./hero.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const Hero = ({ homepageData }) => {
  console.log("homepageData: ", homepageData);
  return (
    <section
      style={{
        background: `url(${homepageData?.featuredImage?.node.sourceUrl}) no-repeat`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="hero">
        <div className="heroContainer">
          <span className="headline">
            {homepageData?.featuredImage?.node.title}
          </span>
          <div
            dangerouslySetInnerHTML={{
              __html: homepageData?.featuredImage?.node.caption,
            }}
            className="description"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
