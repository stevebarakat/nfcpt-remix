import { useLoaderData } from "remix";

const SlugQuery = /* GraphQL */ `
  query GetWordPressPages {
    pages {
      nodes {
        uri
      }
    }
  }
`;

const PageQuery = /* GraphQL */ `
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
`;

async function gqlFetch(query, variables) {
  const response = await fetch(
    "https://old.northfloridachiropracticphysicaltherapy.com/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    }
  );
  return response.json();
}

export async function loader() {
  const slug = await gqlFetch(SlugQuery);
  const page = await gqlFetch(PageQuery, { slug: slug.pages.nodes[0].uri });
  return page.pageBy;
}

export default function Slug() {
  const data = useLoaderData().data;
  console.log(data.pageBy.title);
  return (
    <div className="page">
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
