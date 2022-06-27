import React from 'react';
import { NavLink } from 'react-router-dom';

function NavItem({
    navIcon = "uil uil-scenery nav__icon",
    navText = "Link",
    path = "/",
    handleShowNav
}) {
    return (
        <>
            <li class="nav__item">
                <NavLink to={`${path}`} class="nav__link" onClick={handleShowNav}>
                    <i className={navIcon}></i> {navText}
                </NavLink>
            </li>
        </>
    );
}

export default NavItem;
