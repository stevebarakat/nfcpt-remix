import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";

import Layout from "./components/Layout";
import { useLoaderData } from "remix";

import globalStylesUrl from "~/styles/global.css";
import swiperStylesUrl from "~/styles/swiper.custom.css";
import variablesUrl from "~/styles/variables.css";
import headerUrl from "~/styles/header.css";

// https://remix.run/api/app#links
export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://meyerweb.com/eric/tools/css/reset/reset.css",
    },
    { rel: "stylesheet", href: globalStylesUrl },
    { rel: "stylesheet", href: swiperStylesUrl },
    { rel: "stylesheet", href: variablesUrl },
    { rel: "stylesheet", href: headerUrl },
  ];
};

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
          query GetPrimaryData {
            menus(where: { slug: "info" }) {
              edges {
                node {
                  name
                  menuItems {
                    nodes {
                      label
                      url
                    }
                  }
                }
              }
            }
            nfcptSettings {
              nfcptSettings {
                officeHours {
                  day {
                    closes
                    dayOfWeek
                    opens
                  }
                }
                socialMedia {
                  facebook
                  google
                  twitter
                }
                contactInfo {
                  address
                  businessName
                  cityStateZip
                  fax
                  phone
                }
              }
            }
            menuItems(where: { location: PRIMARY, parentId: "null" }) {
              nodes {
                path
                label
                id
                childItems {
                  nodes {
                    id
                    path
                    label
                  }
                }
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

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  const data = useLoaderData().data;
  const menuItems = data.menuItems.nodes;
  console.log(menuItems);

  return (
    <Document>
      <Layout menuItems={menuItems} data={data}>
        <Outlet />
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  const caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
