import { useLoaderData } from "remix";

export let meta = () => {
  return {
    title: "North Florida Chiropractic Physical ",
    description: "Car Accident Chiropractor",
  };
};

export function headers({ loaderHeaders, parentHeaders }) {
  return {
    "Cache-Control": "....",
  };
}

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

export async function loader({ params }) {
  let url = params.slug;

  const slug = await gqlFetch(SlugQuery);
  const res = slug.data.pages.nodes.find((node) => node.uri === `/${url}/`);

  if (!res || !res.uri) {
    throw new Response("could not find page", {
      headers: {
        status: 404,
      },
    });
  }

  const pageData = await gqlFetch(PageQuery, {
    slug: `${res.uri}`,
  });
  if (!pageData || !pageData.data) {
    throw new Response("could not find page", {
      headers: {
        status: 404,
      },
    });
  }

  return pageData.data;
}

export default function Page() {
  const data = useLoaderData();
  console.log(data.pageBy);
  return (
    <div className="page">
      <div
        style={{
          background: `url(${data.pageBy.featuredImage.node.sourceUrl}) center no-repeat`,
          backgroundSize: "cover",
        }}
        className="mastheadWrap"
      >
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
