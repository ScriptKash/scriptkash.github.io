import React from 'react';
import PropTypes from 'prop-types';
import HeadComponent from '../components/Head';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

import useLayout from '../hooks/useLayout';
import useDrawer from '../hooks/useDrawer';
import Layout from '../components/Layout';

import '../index.css';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const { pageActive, loading, desktop, handleLoading, handleChangePage } = useLayout();

  const { setDrawer, toggleDrawer, positionDrawer, typeDrawer, drawer } = useDrawer();

  return (
    <React.Fragment>
      <HeadComponent title="Home" />
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout
          pageActive={pageActive}
          loading={loading}
          desktop={desktop}
          handleLoading={handleLoading}
          handleChangePage={handleChangePage}
          toggleDrawer={toggleDrawer}
          positionDrawer={positionDrawer}
          typeDrawer={typeDrawer}
          drawer={drawer}
          setDrawer={setDrawer}
        >
          <Component {...pageProps} desktop={desktop} handleChangePage={handleChangePage} />
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
