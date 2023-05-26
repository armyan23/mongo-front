import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { wrapper } from "store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "styles/globals.css";

const App = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      {getLayout(
        <>
          <Component {...pageProps} />
          <ToastContainer />
        </>
      )}
    </Provider>
  );
};

App.propTypes = {
  pageProps: PropTypes.object,
  Component: PropTypes.func,
};

export default App;
