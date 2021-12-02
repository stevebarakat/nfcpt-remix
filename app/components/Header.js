import { useState, useRef } from "react";
import { Link } from "remix";
import useOnClickOutside from "../hooks/useOnClickOutside";
import Hamburger from "hamburger-react";
import { FaCaretDown } from "react-icons/fa";
import logo from "../images/logo.svg";
import mobileLogo from "../images/mobile-logo.svg";
// import styles from "./header.css";

// export function links() {
//   return [{ rel: "stylesheet", href: styles }];
// }

const Menu = ({ item, handleSetMobileOpen }) => {
  const ref = useRef();
  const [isActive, setIsActive] = useState(false);
  const dropdownButton = item.childItems.nodes;
  const isDropdownButton = dropdownButton.length > 0;

  useOnClickOutside(ref, () => setIsActive(false));

  const primaryMenu = (
    <li ref={ref}>
      {!isDropdownButton ? (
        <Link to={item.path} className="link">
          {item.label}
        </Link>
      ) : (
        <button
          className="link"
          onClick={() => {
            setIsActive((isActive) => !isActive);
          }}
        >
          {item.label}
          <FaCaretDown />
        </button>
      )}

      {item.childItems.nodes.length > 0 && (
        <ul className={isActive ? "dropdown" : "dropdown sr-only"}>
          {item.childItems.nodes.map((item) => {
            return (
              <li key={item.id} className="dropdown-item">
                <Link
                  to={item.path}
                  className="link"
                  onPointerUp={() => handleSetMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
  return <>{primaryMenu}</>;
};

export default function Header({ menuItems }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleSetMobileOpen = (val) => setMobileOpen(val);

  return (
    <>
      <span className="sr-only">Open main menu</span>
      <div
        className="toggle-mobile-btn"
        onPointerUp={() => setMobileOpen((mobileOpen) => !mobileOpen)}
      >
        <Hamburger label="toggle menu" toggled={mobileOpen} size={20} />
      </div>
      <nav
        className="nav"
        style={{
          "--toggleMobile": mobileOpen ? "translateX(0)" : " translateX(-100%)",
        }}
      >
        <div className="nav-container">
          <div className="logo">
            <a href="/">
              <img
                width="200"
                src={logo}
                alt="North Florida Chiropractic Physical Therapy"
              />
            </a>
          </div>
          <div>
            <ul className="menu">
              {menuItems &&
                menuItems.map((item) => (
                  <Menu
                    handleSetMobileOpen={handleSetMobileOpen}
                    key={item.id}
                    item={item}
                  />
                ))}
            </ul>
          </div>
          <div className="phone">
            <a href="tel:904-272-4329">(904) 277-4686</a>
          </div>
        </div>
      </nav>
      <a href="/" style={{ position: "absolute", zIndex: "9", left: "1rem" }}>
        <img
          width="200"
          src={mobileLogo}
          alt="North Florida Chiropractic Physical Therapy"
        />
      </a>
    </>
  );
  return null;
}
