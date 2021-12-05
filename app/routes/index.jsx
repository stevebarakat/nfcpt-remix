import { useLoaderData, Link } from "remix";
import Hero from "../components/Hero";
import Cta from "../components/Cta";
import Mission from "../components/Mission";
import Treatments from "../components/Treatments";
import Blocks from "../components/Blocks";
import styles from "../styles/index.css";

export let meta = () => {
  return {
    title: "North Florida Chiropractic Physical ",
    description: "Car Accident Chiropractor",
  };
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function loader() {
  const data = fetch(
    "https://old.northfloridachiropracticphysicaltherapy.com/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query GetHomepage {
          nfcptSettings {
            nfcptSettings {
              disorders {
                disorder {
                  disorderName
                  disorderImageBase64
                  disorderImage {
                    sourceUrl
                  }
                }
              }
            }
          }
          pageBy(uri: "homepage") {
            title
            featuredImage {
              node {
                slug
                title
                caption
                sourceUrl
                altText
              }
            }
            seo {
              metaDesc
              title
            }
          }
        }
      `,
      }),
    }
  )
    .then((res) => res.json())
    .then((result) => result);
  return data;
}

export default function Index() {
  const data = useLoaderData().data;
  return (
    <>
      <Hero homepageData={data.pageBy} />
      <Cta />
      <Mission />
      <Treatments footerData={data.nfcptSettings.nfcptSettings} />
      <Blocks />
    </>
  );
}
