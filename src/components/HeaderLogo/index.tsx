import React from "react";
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <div className="header-logo">
      <Link to={"/"} className="logo">Electrican</Link>
      {/* <a className="logo">
        Electrican
      </a> */}
    </div>
  );
};

export default HeaderLogo;
