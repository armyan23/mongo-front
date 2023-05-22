import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <main className="main">
      Layout
      <br />
      {children}
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
