import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <Link className="navlink" to="/">
                Home
            </Link>
            <Link className="navlink" to='/cart'>
                Cart
            </Link>
            <Link className="navlink" to='/contact'>
                Contact
            </Link>
        </div>
     );
}
 
export default Navbar;