import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';
import { UserAuthContextProvider } from '../context/UserAuthContextProvider';
// import { ProtectedRoute } from './ProtectedRoute';
import { News } from '../pages/News';
import { PrivateRoute } from './PrivateRoute';
import { Checkout } from '../components/stripe/checkout/Checkout';
import { Success } from '../components/stripe/checkout/Success';
import { Canceled } from '../components/stripe/checkout/Canceled';
import { Sports } from '../pages/sports/Sports';
import { Technology } from '../pages/technology/Technology';
import { Science } from '../pages/science/Science';
import { Health } from '../pages/health/Health';
import { General } from '../pages/general/General';
import { Entertainment } from '../pages/entertainment/Entertainment';
import { Business } from '../pages/business/Business';
import { NewsContextProvider } from '../context/NewsContextProvider';
import { AnyNews } from '../components/newsApi/news/AnyNews';
import { Navbar } from '../components/newsApi/navbar/Navbar';
// import { Card } from '../components/Card';
export const Routers = () => {

    return (
        <>
            <Row>
                <Col>
                    <UserAuthContextProvider>
                        <NewsContextProvider>
                            <Navbar/>
                            <Routes>
                                <Route element={<PrivateRoute />} >
                                    <Route path="/home" element={<Home />} />
                                    <Route path="/news" element={<News />} />
                                    <Route path="/checkout/:newsId" element={<Checkout />} />
                                    <Route path="/success" element={<Success />} />
                                    <Route path="/canceled" element={<Canceled />} />
                                </Route>
                                {/* <Route 
                                    path="/home" 
                                    element={
                                        <ProtectedRoute>
                                            <Home/>
                                        </ProtectedRoute>
                                    } 
                                />
                                <Route 
                                    path="/news" 
                                    element={
                                        <ProtectedRoute>
                                            <News/>
                                        </ProtectedRoute>
                                    } 
                                /> */}

                                {/* <Route path="/" element={<Card/>} /> */}
                                <Route path="/" element={<AnyNews />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/signup" element={<Signup />} />

                                <Route path='/sports' element={<Sports />} />
                                <Route path='/technology' element={<Technology />} />
                                <Route path='/science' element={<Science />} />
                                <Route path='/health' element={<Health />} />
                                <Route path='/general' element={<General />} />
                                <Route path='/entertainment' element={<Entertainment />} />
                                <Route path='/business' element={<Business />} />
                                <Route path='*' element={<Navigate replace to={"/"} />} />
                            </Routes>
                        </NewsContextProvider>
                    </UserAuthContextProvider>
                </Col>
            </Row>
        </>
    )
}
