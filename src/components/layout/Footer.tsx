import { Link } from "react-router-dom";
import { businessInfo, navLinks } from "../../data/siteContent";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <h4>{businessInfo.name}</h4>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem" }}>
            Independent insurance agency serving South Carolina since {businessInfo.yearFounded}. Personal, business, and everything in between.
          </p>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem" }}>
            {businessInfo.addressLine1}
            <br />
            {businessInfo.addressLine2}
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div>
          <h4>Contact</h4>
          <a href={businessInfo.phoneHref}>{businessInfo.phone}</a>
          <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
        </div>
      </div>

      <div className="site-footer__bottom">
        &copy; {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
      </div>
    </footer>
  );
}
