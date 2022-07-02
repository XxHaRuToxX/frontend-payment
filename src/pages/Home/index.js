import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContextProvider';

import './home.css';

export const Home = () => {

    const { user, logOut } = useUserAuth();

    const handleLogout = async () => {

        try {
            await logOut();
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <div>
                <div className="d-flex flex-column justify-content-center align-items-center home_div">
                    <div className="p-4 mt-3 text-white text-center">
                        <h2>Welcome</h2>
                        <br />
                        {
                            user && user.email
                        }
                        <br /><br />
                        <div className="d-grid gap-2">
                            <Button variant="primary" onClick={handleLogout}>Log out</Button>
                            <Link className='text-white' to={"/news"}>Go to News</Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
