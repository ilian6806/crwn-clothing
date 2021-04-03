
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IcD3lATsZsHcqNUIAMUPYMtfB68IwS4xumYAcUe2plNGRW5DljS2fSiwAq1NUwJ3pCMN9YXpdyj1RfpOQ5a7hQO00GNJ1WXSt';

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    };

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddresss
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;