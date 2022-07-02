import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useUserAuth } from '../../../context/UserAuthContextProvider';
import '../../../styles/styles.css';
import './navbar.css'

export const Navbar = () => {
    const { user, logOut } = useUserAuth();
    const handleLogout = async () => {

        try {
            await logOut();
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <nav className="header">

            <div className='col-2 d-flex justify-content-center'>
                <Link to={"/"}>
                    <img className='w-75' src="https://res.cloudinary.com/db50qqs57/image/upload/v1656736411/logo-news_mmtr2l.png" alt="logo" />
                </Link>
            </div >

            <div className='col-10 d-flex justify-content-center' >
                <ul>
                    <li>  <Link className="category_button" to={"business"}>Business</Link> </li>
                    <li>  <Link className="category_button" to={"entertainment"}>Entertainment</Link> </li>
                    <li>  <Link className="category_button" to={"general"}>General</Link> </li>
                    <li>  <Link className="category_button" to={"health"}>Health</Link> </li>
                    <li>  <Link className="category_button" to={"science"}>Science</Link> </li>
                    <li>  <Link className="category_button" to={"sports"}>Sports</Link></li>
                    <li>  <Link className="category_button" to={"technology"}>Technology</Link></li>
                    {
                        user ? (
                            <li>
                                <Link to="/" className="category_button_auth">
                                    <button
                                        style={{ border: 'none', background: 'none', color: "#fff" }}
                                        onClick={handleLogout}>
                                        Cerrar sesión
                                    </button>
                                </Link>
                            </li>
                        ) : (
                            <li><Link to="login" className="category_button_auth"> Log in </Link></li>
                        )
                    }
                </ul>
            </div >

        </nav >
    )
}
