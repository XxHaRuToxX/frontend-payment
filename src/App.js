import './App.css';
import { Routers } from './routes/Routers';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51JKBqNCcNV06fzNIb8Tz9WBt5X7b1ISv093CvDwOzDB6jphL45UTTKlLoAP0sUPNQhjilxLnttMPpNDs72UPp3BZ00WZl0V9Ed");

export const App = () => {
    return (
        <Elements stripe={stripePromise} >
            <Routers/>
        </Elements>
    );
}
