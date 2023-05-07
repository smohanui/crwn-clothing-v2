import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../Assets/crown.svg";
import "./Navigation.styles.scss";

const NavigationComponent = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo />
        </Link>
        <div className="nav-links-container">
          <Link to="/Sign-In" className="nav-link">
            Sign-In
          </Link>
          <Link to="/Shop" className="nav-link">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationComponent;
