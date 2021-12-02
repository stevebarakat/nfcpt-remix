import styles from "./hero.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const Hero = ({ home }) => {
  console.log("home: ", home);
  return (
    <section
      style={{ background: `url(${home?.featuredImage?.node.sourceUrl})` }}
      className="heroContainer"
    >
      <div className="hero">
        <span className="headline">{home?.featuredImage?.node.title}</span>
        <div
          dangerouslySetInnerHTML={{
            __html: home?.featuredImage?.node.caption,
          }}
          className="description"
        ></div>
      </div>
      {/* <img
        src={home?.featuredImage?.node.sourceUrl}
        alt={home?.featuredImage?.node.altText}
      /> */}
    </section>
  );
};

export default Hero;
