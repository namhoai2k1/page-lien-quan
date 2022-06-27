/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import styled from 'styled-components';
import NavItem from '../NavItem/NavItem';

const NavMenuStyle = styled.header`
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: var(--z-fixed);
    background-color: var(--body-color);

    .nav {
        max-width: 968px;
        height: var(--header-height);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .nav__logo,
    .nav__toggle {
        color: var(--title-color);
        font-weight: var(--font-medium);
    }

    .nav__logo:hover {
        color: var(--frist-color);
    }

    .nav__toggle {
        font-size: 1.1rem;
        cursor: pointer;
    }

    .nav__toggle:hover {
        color: var(--frist-color);
    }

    /* show nav */
    @media screen and (max-width: 768px) {
        .nav__menu {
            position: fixed;
            bottom: -100%;
            left: 0;
            width: 100%;
            background-color: var(--body-color);
            padding: 2rem 1.5rem 4rem;
            box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
            border-radius: 1.5rem 1.5rem 0 0;
            transition: 0.3s;
        }
    }

    .nav__list {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }

    .nav__link {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: var(--small-font-size);
        color: var(--title-color);
    }

    .nav__link:hover {
        color: var(--frist-color);
    }

    .nav__icon {
        font-size: 1.3rem;
    }

    .nav__close {
        position: absolute;
        right: 1.3rem;
        bottom: 0.5rem;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--frist-color);
    }

    .nav__close:hover {
        color: var(--first-color-alt);
    }

    /* show menu */

    .show-menu {
        bottom: 0;
    }
`;

const links = [
    {
        href: 'Home',
        icon: 'uil uil-estate nav__icon',
        text: 'Home',
        path: '/',
    },
    {
        href: 'About',
        icon: 'uil uil-estate nav__icon',
        text: 'About',
        path: '/about',
    },
    {
        href: 'Player',
        icon: 'uil uil-estate nav__icon',
        text: 'Playse',
        path: '/player',
    },
    {
        href: 'Highlights',
        icon: 'uil uil-estate nav__icon',
        text: 'Highlights',
        path: '/highlights',
    },
];

function NavMenu() {
    const [showNav, setShowNav] = useState(false);
    const handleShowNav = () => {
        setShowNav(!showNav);
    };
    return (
        <NavMenuStyle className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo" id="logo">
                    FLNAM
                </a>
                <div
                    className={!showNav ? 'nav__menu' : 'nav__menu show-menu'}
                    id="nav__menu"
                >
                    <ul className="nav__list grid">
                        {links.map((link, index) => {
                            return (
                                <NavItem
                                    key={index}
                                    navIcon={link.icon}
                                    navText={link.text}
                                    handleShowNav={handleShowNav}
                                    path={link.path}
                                />
                            );
                        })}
                    </ul>
                    <i
                        className="uil uil-times nav__close"
                        id="nav__close"
                        onClick={handleShowNav}
                    ></i>
                </div>
                <div className="nav__btns">
                    {/* <!-- theme change button --> */}
                    <i
                        className="uil uil-moon change-theme"
                        id="theme-button"
                    ></i>

                    <div
                        className="nav__toggle"
                        id="nav__toggle"
                        onClick={handleShowNav}
                    >
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </NavMenuStyle>
    );
}

export default NavMenu;
