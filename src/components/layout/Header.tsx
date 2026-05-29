import { Link } from "react-router-dom";
import { businessInfo } from "../../data/siteContent";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="logo" aria-label={`${businessInfo.name} home`}>
          <div className="logo__mark">
            <div className="logo__letters">
              <span className="logo__letter">C</span>
              <span className="logo__letter">H</span>
              <span className="logo__letter">W</span>
            </div>
            <span className="logo__name">INSURANCE GROUP</span>
            <span className="logo__tagline">HOME • AUTO • BUSINESS</span>
          </div>
        </Link>

        <div className="header__address">
          <span className="header__pin" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </span>
          <span>
            {businessInfo.addressLine1}
            <br />
            {businessInfo.addressLine2}
          </span>
        </div>

        <a href={businessInfo.phoneHref} className="header__phone">
          {businessInfo.phone}
        </a>

        <Link to="/contact" className="header__cta">
          <strong>FREE</strong>&nbsp;QUOTE
        </Link>
      </div>
    </header>
  );
}
