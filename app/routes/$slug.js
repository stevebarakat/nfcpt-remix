import React from "react";
import { useLoaderData } from "remix";

export async function loader() {
  const slug = "first-visit";
  const page = await fetch(
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
  return page;
}

function Slug() {
  const page = useLoaderData();
  console.log(page.data.pageBy.featuredImage.node.sourceUrl);

  return <p>page.data.pageBy.featuredImage.node.sourceUrl</p>;
}

export default Slug;
