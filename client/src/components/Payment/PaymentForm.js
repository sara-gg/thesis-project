import React from "react";
import { useHistory } from "react-router-dom";
import ApiService from "../../ApiService/ApiService.ts";
import Layout from "./sub-components/Layout";
import CheckoutForm from "./sub-components/CheckoutForm";

const PaymentForm = ({ amoutToPay, basketProducts }) => {
  let history = useHistory();

  const handlePayment = () => {
    basketProducts.forEach((product) => {
      ApiService.updateQuantityProduct(product).then(() =>
        history.push("/successful_payment")
      );
    });
  };

  return (
    <Layout title="Donut Shop">
      <CheckoutForm price={amoutToPay} onSuccessfulCheckout={handlePayment} />
    </Layout>
  );
};

export default PaymentForm;
