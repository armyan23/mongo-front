import React from "react";
import PropTypes from "prop-types";

import "styles/globals.css";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

App.propTypes = {
  pageProps: PropTypes.object,
  Component: PropTypes.func,
};

export default App;
