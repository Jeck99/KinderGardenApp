import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {

    return (
        <>
            <Link to="/">Home Page</Link>
            <Link to="/child">Child Page</Link>
            <Link to="/teacher">Teacher Page</Link>
            <Link to="/parent">Parent Page</Link>
        </>
    )
}
export default NavbarComponent;