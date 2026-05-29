import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/siteContent";

export function SubNav() {
  return (
    <nav className="subnav" aria-label="Primary">
      <div className="subnav__inner">
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            to={link.href}
            end={link.href === "/"}
            className={({ isActive }) =>
              `subnav__link ${isActive ? "active" : ""}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
