import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useUserAuth } from '../../context/UserAuthContextProvider'

export const PrivateRoute = () => {

    const { user } = useUserAuth();

    return user ? <Outlet/> : <Navigate to={"/"}/>
}
