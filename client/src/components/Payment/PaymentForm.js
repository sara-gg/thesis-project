import React from 'react';
import { useHistory } from "react-router-dom";

import Layout from "./sub-components/Layout";
import CheckoutForm from "./sub-components/CheckoutForm";

const PaymentForm = ({ amoutToPay }) => {
  let history = useHistory();

  return (
    <Layout title="Donut Shop">
      <CheckoutForm
        price={amoutToPay}
        onSuccessfulCheckout={() => {
          history.push("/successful_payment");
        }}
      />
    </Layout>
  );
};

export default PaymentForm;
