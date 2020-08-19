import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const publishableKey =
    'pk_test_51HEdJYJmkeWgO5SvaaIOFSgeKlk35pcPPbDX8YzSs0gS5NaSupCmaXBX2Rk7J06yfSdarFfi2bMm0dusD4lD5FPn00vHM1JnNy';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={price}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
