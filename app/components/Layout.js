import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, menuItems, data }) => (
  <>
    <Header menuItems={menuItems} />
    {children}
    <Footer data={data} />
  </>
);

export default Layout;
