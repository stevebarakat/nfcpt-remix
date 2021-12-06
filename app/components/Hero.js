import { buildUrl } from "cloudinary-build-url";

// const urlPixelated = buildUrl(page.featuredImage.node.slug, {
//   cloud: {
//     cloudName: "stevebarakat",
//   },
//   transformations: {
//     effect: {
//       name: "pixelate",
//     },
//   },
// });

const Hero = ({ homepageData }) => {
  return (
    <section
    // style={{
    //   background: `url(${homepageData?.featuredImage?.node.sourceUrl}) no-repeat`,
    //   backgroundPosition: "center",
    //   backgroundSize: "cover",
    // }}
    >
      <div className="hero">
        <img src={homepageData?.featuredImage?.node.sourceUrl} />
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
