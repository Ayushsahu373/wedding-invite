import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { navigation } from "../../config/navigation";
import { couple } from "../../config/couple";

import "../../styles/components/_navbar.scss";

const FloatingNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`floating-navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="navbar-logo">
        {couple.groom.name} ❤️ {couple.bride.name}
      </div>

      {/* Nav Links */}
      <div className="navbar-links">
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default FloatingNavbar;
