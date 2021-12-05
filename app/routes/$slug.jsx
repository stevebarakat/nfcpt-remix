import { useLoaderData, Link } from "remix";
import Hero from "../components/Hero";
import Cta from "../components/Cta";
import Mission from "../components/Mission";
// import Treatments from "../components/Treatments";
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
  const slug = "first-visit";
  const data = fetch(
    "https://old.northfloridachiropracticphysicaltherapy.com/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query GetWordPressPagesBySlug($slug: String!) {
          pageBy(uri: $slug) {
            title
            content
            seo {
              title
              metaDesc
            }
            featuredImage {
              node {
                slug
                title
                caption
                sourceUrl
                altText
              }
            }
          }
        }
      `,
        variables: { slug },
      }),
    }
  )
    .then((res) => res.json())
    .then((result) => result);
  return data;
}

export default function Slug() {
  const data = useLoaderData().data;
  console.log(data.pageBy.title);
  return (
    <div className="page">
      <div className="mastheadWrap">
        <img
          src={data.pageBy.featuredImage.node.sourceUrl}
          alt={data.pageBy.featuredImage.node.altText}
        />
        <div className={"heading container"}>
          <span className="h1">{data.pageBy.featuredImage.node.title}</span>
          <div
            className="description"
            dangerouslySetInnerHTML={{
              __html: data.pageBy.featuredImage.node.caption,
            }}
          ></div>
        </div>
      </div>
      <main>
        <div className="container">
          <div className="pageWrap">
            <article>
              <h1>{data.pageBy.title}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: data.pageBy.content }}
              ></div>
            </article>
            <div className="sidebarWrap">{/* <Sidebar /> */}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
