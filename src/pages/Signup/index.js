import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../context/UserAuthContextProvider'
import { useForm } from '../../hooks/useForm'

import './signup.css';

export const Signup = () => {

    const [error, setError] = useState("");
    const [formValues, handleInputChange] = useForm({
        email: "",
        password: "",
    });

    const { signUp } = useUserAuth();
    const navigate = useNavigate();

    const { email, password } = formValues;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {

            await signUp(email, password);
            navigate("/login");

        } catch (error) {

            setError(error.message)

        }
    }

    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center signup_div">
                <div>
                    <div className="p-4 box">
                        <h2 className="mb-3">Auth Signup</h2>
                        {
                            error && <Alert variant="danger">{error}</Alert>
                        }
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control
                                    type="email"
                                    placeholder="Email address"
                                    onChange={handleInputChange}
                                    name="email"
                                    value={email}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    onChange={handleInputChange}
                                    name="password"
                                    value={password}
                                />
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button variant="primary" type="submit" >
                                    Sign up
                                </Button>
                            </div>
                        </Form>
                    </div>
                    <div className="p-4 box mt-3 text-center">
                        Already have an account? <Link to={"/login"}>Log in</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
