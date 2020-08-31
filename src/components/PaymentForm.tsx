import React from "react";
import { useHistory } from "react-router-dom";
import ApiService from "../ApiService/ApiService";
import Layout from "./Layout";
import CheckoutForm from "./CheckoutForm";
import { Product } from "../models/product";

type Props = {
  amountToPay: number;
  basketProducts: Product[];
};

const PaymentForm = ({ amountToPay, basketProducts }: Props): JSX.Element => {
  let history = useHistory();

  const handlePayment = () => {
    basketProducts.forEach((product) => {
      ApiService.updateQuantityProduct(product).then(() =>
        history.push("/successful_payment")
      );
    });
  };

  return (
    <Layout title="Furniss">
      <CheckoutForm price={amountToPay} onSuccessfulCheckout={handlePayment} />
    </Layout>
  );
};

export default PaymentForm;
