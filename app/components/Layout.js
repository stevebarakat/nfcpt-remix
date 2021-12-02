// import loadable from "@loadable/component";
import Header from "./Header";
// import Footer from "../components/Footer";
// const Footer = loadable(() => import("./Footer"));

const Layout = ({ children, menuItems }) => (
  <>
    <Header menuItems={menuItems} />
    {children}
    {/* <Footer /> */}
  </>
);

export default Layout;
