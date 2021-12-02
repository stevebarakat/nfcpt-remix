import styles from "./hero.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const Hero = ({ home }) => {
  console.log("home: ", home);
  return (
    <section
      style={{
        background: `url(${home?.featuredImage?.node.sourceUrl}) no-repeat`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="hero">
        <div className="heroContainer">
          <span className="headline">{home?.featuredImage?.node.title}</span>
          <div
            dangerouslySetInnerHTML={{
              __html: home?.featuredImage?.node.caption,
            }}
            className="description"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
