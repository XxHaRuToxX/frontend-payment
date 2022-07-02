import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContextProvider';
import { useForm } from '../../hooks/useForm';
import './login.css';

export const Login = () => {

    const [error, setError] = useState("");
    const [formValues, handleInputChange] = useForm({
        email: "",
        password: "",
    });

    const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();
    const { email, password } = formValues;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate("/home");
        } catch (error) {
            setError(error.message)
        }
    }

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/home");
        } catch (error) {
            setError(error.message)
        }
    };

    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center login_div">
                <div className='box'>
                    <div className="p-4 my-3 px-5">
                        <h2 className="mb-3 text-center mb-5">Auth Login</h2>
                        {
                            error && <Alert variant="danger">{error}</Alert>
                        }
                        <Form onSubmit={handleSubmit} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control
                                    type="email"
                                    placeholder="Email address"
                                    name="email"
                                    value={email}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button variant="primary" type="submit" >
                                    Log in
                                </Button>
                            </div>
                        </Form>
                        <hr />
                        <div>
                            <GoogleButton
                                className="g-btn"
                                type="dark"
                                onClick={handleGoogleSignIn}
                            />
                        </div>
                    </div>
                </div>
                <div className="p-4 box mt-3 text-center">
                    Don't have an account? <Link to={"/signup"}>Sign up</Link>
                </div>
            </div>
        </>
    )
}
