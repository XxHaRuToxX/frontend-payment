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

            <NavLink className="logo" to={"/"}><div className="div_news">News <span className="span_news">App</span></div></NavLink>
            <i className="search fa-solid fa-magnifying-glass"></i>
            <ul>
                 <li>  <Link className="category_button" to={"business"}>Negocios</Link> </li>
                 <li>  <Link className="category_button" to={"entertainment"}>Entretenimiento</Link> </li>
                 <li>  <Link className="category_button" to={"general"}>General</Link> </li>
                 <li>  <Link className="category_button" to={"health"}>Salud</Link> </li>
                 <li>  <Link className="category_button" to={"science"}>Ciencia</Link> </li>
                 <li>  <Link className="category_button" to={"sports"}>Deportes</Link></li>
                 <li>  <Link className="category_button" to={"technology"}>Tecnologías</Link></li>
                 {
                    user ? (
                        <li>  <Link to="/" className="category_button"> <button style={{border:'none', background:'none', color:"#fff"}} onClick={handleLogout}>Cerrar sesión</button> </Link>    </li>       
                    ) : (

                        <li>  <Link to="login" className="category_button"> Iniciar Sesion </Link>    </li>       
                    )
                 }
            </ul>
            <i className=" fa-solid fa-bars"></i>
        </nav>
    )
}
