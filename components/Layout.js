import React, { Fragment } from 'react';
import Head from 'next/head';

const Layout = ({ children, pageTitle }) => (
  <Fragment>
    <Head>
      <title>{pageTitle}</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
    </Head>
    {children}
  </Fragment>
);

export default Layout;
