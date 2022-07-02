import React from 'react';
import { StripeCheckout } from '../stripe-checkout/stripe-checkout';
import './checkout.css';

export const Checkout = () => {

    return (
        <div className='d-flex  flex-column p-4 mt-3 text-center justify-content-center box'>
            <h2>Checkout Summary</h2>
            <h3>{`Total items: ${1}`}</h3>
            <StripeCheckout/>
        </div>
    )
}
