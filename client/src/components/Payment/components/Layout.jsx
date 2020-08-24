import Head from "next/head";
import React from 'react';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe("pk_test_51HIYqeHvILi8NO5PWxHkN04ZQxZcdDIxVUPh5nVfaQRMXC4UJiptUx4uWyCJHWfGfih2AhoSB4wgI2xKskMCECs800otDuHmjG");

console.log('stripePromise', stripePromise)

// TIP: don't call loadStripe
// don't want to load more than you have to

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Elements stripe={stripePromise}>{children}</Elements>
    </>
  );
};

export default Layout;
