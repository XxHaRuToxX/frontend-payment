import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

import { ContentCard } from '../ContentCard';

import './input.css';

export const Input = () => {
    const [inputLabel, setInputLabel] = useState(false);

    const colorSpan = ["#000000", "#6E6E6E"]

    const handleOnChange = (e)=>{
        setInputLabel(e.target.checked)
    }

    return (
        <>
            <div className="d-flex flex-row p-3 justify-content-center align-items-center">
                <p className="me-3 mt-3 fs-5 fw-bold" style={{color:(!inputLabel) ? colorSpan[0] : colorSpan[1]}}>Plan Estándar</p>
                <Form>
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        onChange={handleOnChange}
                    />
                </Form>
                <p className="ms-3 mt-3 fs-5 fw-bold" style={{color:(!inputLabel) ? colorSpan[1] : colorSpan[0]}}>Plan Premium</p>
            </div>
            <ContentCard changeContent={!inputLabel} />
        </>
    )
}
