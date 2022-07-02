import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './checkout.css';

export const Success = () => {
    const navigate = useNavigate();
    return (
        <div className="d-flex flex-column justify-content-center align-items-center success_div">
            <h1>Thank you for your order</h1>
            <p>We are  currently processing your order and will send a confirmation email shortly.</p>
            <div>
                <Button variant="primary" onClick={()=>navigate("/home")} >Continue Shopping</Button>
            </div>
        </div>
    )
}

