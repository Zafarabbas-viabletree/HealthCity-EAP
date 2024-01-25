// @flow
import React from "react";
import { css } from "aphrodite";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import styles from "./StripePaymentStyles";

export default function StripePaymentView(props) {
  const stripePromise = loadStripe(
    `pk_test_51INgDFI6oCZ2Dyk98saz1k6o6S73Mih1xSX9NGMT5bNEmdAB5PDmwusjFvXsnNGI1cD9IPWjGEfW64tHwROV8aTk00PJIwOoSZ`
  );
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm {...props} ref={props.checkoutRef} />
      </Elements>
    </div>
  );
}
