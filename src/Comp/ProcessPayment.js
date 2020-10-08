import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitForm from './SplitCardForm';
// import {} from '@stripe/react-stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51HZg2PCqCZT8dmN1fkCuYm4fUTPBvrlP3nwYr75PJgfPfB3FjBY6tP081zueLe32BKQ6VPbhdOSbSfrXcxWgOIHG00WWZaU2xz');

const ProcessPayment = (props) => {
  return (
    <Elements stripe={stripePromise}>
      

<SimpleCardForm handlePaymentSuccess={props.handlePaymentSuccess}/>
{/* <SplitForm/> */}
    </Elements>
  );
};

export default ProcessPayment