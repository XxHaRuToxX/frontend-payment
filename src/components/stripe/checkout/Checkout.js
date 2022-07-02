import React from 'react';
import { StripeCheckout } from '../stripe-checkout/stripe-checkout';
import './checkout.css';

export const Checkout = () => {

    return (
        <div className='d-flex flex-column justify-content-center align-items-center box-checkout'>
            <h2>Checkout Summary</h2>
            <h3>{`Total items: ${1}`}</h3>
            <StripeCheckout />
        </div>
    )
}
