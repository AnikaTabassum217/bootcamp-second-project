import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/navbar.css'

const Navbar=()=>{
    return(
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link className={window.location.pathname == "/" ? "nav-active" : " "} to={'/'}>Home</Link>
                        </li>
                        <li>
                        <Link className={window.location.pathname == "/about-us" ? "nav-active" : " "} to={'/about-us'}>About us</Link>
                        </li>
                        <li>
                        <Link className={window.location.pathname == "/product" ? "nav-active" : " "} to={'/product'}>Product</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;