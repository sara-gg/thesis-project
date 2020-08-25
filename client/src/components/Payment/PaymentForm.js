import React from 'react';
import { useHistory } from "react-router-dom";

import Layout from "./sub-components/Layout";
import CheckoutForm from "./sub-components/CheckoutForm";

const PaymentForm = ({ amoutToPay, basketProducts }) => {
  let history = useHistory();


  const handlePayment = () => {
const newQuantity = "todo"   //TODO
  }

  return (
    <Layout title="Donut Shop">
      <CheckoutForm
        price={amoutToPay}
        onSuccessfulCheckout={() => {
          // put quantity change req.
          history.push("/successful_payment");
        }}
      />
    </Layout>
  );
};

export default PaymentForm;
