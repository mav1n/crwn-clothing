import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HEdJYJmkeWgO5SvaaIOFSgeKlk35pcPPbDX8YzSs0gS5NaSupCmaXBX2Rk7J06yfSdarFfi2bMm0dusD4lD5FPn00vHM1JnNy';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment Successful');
      })
      .catch((error) => {
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment. Please be sure you use the provided credit card'
        );
      });
  };

  const rupee = <span>&#8377;</span>;

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is \u20B9${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      currency='INR'
    />
  );
};

export default StripeCheckoutButton;
