import { useLoaderData } from "remix";

const SlugQuery = /* GraphQL */ `
  query GetWordPressPages {
    pages {
      nodes {
        slug
      }
    }
  }
`;

const PageQuery = /* GraphQL */ `
  query GetWordPressPagesBySlug($slug: String!) {
    pageBy(slug: $slug) {
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

export async function loader({ params }) {
  let url = params.slug;
  const slug = await gqlFetch(SlugQuery);
  const pageData = await gqlFetch(PageQuery, {
    slug: slug.data.pages.nodes.find((node) => node.slug === url),
  });
  return pageData;
}

export default function Page() {
  const data = useLoaderData();
  console.log(data.pageBy);
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
