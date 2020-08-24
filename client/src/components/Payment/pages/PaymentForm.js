import Router from "next/router";
import React from 'react';
import { useHistory } from "react-router-dom";


import Layout from "../components/Layout";
import CheckoutForm from "../components/CheckoutForm";

const PaymentForm = ({ amoutToPay }) => {
  console.log('amoutToPay', amoutToPay)
  let history = useHistory();

  return (
    <Layout title="Donut Shop">
      <CheckoutForm
        price={amoutToPay}
        onSuccessfulCheckout={() => {
          console.log('MONEY IN THE BANK!!')
          history.push("/home");
        }}
      />
    </Layout>
  );
};

export default PaymentForm;
