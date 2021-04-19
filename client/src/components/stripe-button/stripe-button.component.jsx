
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IcD3lATsZsHcqNUIAMUPYMtfB68IwS4xumYAcUe2plNGRW5DljS2fSiwAq1NUwJ3pCMN9YXpdyj1RfpOQ5a7hQO00GNJ1WXSt';

    const onToken = token => {
        axios({
            url: 'payment', 
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(response => {
            alert('Payment successful');
        }).catch(error => {
            console.log('Payment error: ' + JSON.parse(error));
            alert('There was na issue with your payment.')
        });
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