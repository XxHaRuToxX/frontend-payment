import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './checkout.css';

export const Canceled = () => {
    const navigate = useNavigate();
    return (
        <div className='d-flex flex-column justify-content-center align-items-center canceled_div'>
            <h1>Payment failed</h1>
            <p>Payment was not successfull</p>
            <div>
                <Button variant="primary" onClick={()=>navigate("/news")} >Continue Shopping</Button>
            </div>
        </div>
    )
}
