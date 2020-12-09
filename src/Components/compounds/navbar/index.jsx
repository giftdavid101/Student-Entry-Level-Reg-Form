import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './navbar.style.css';
import {BiUser, FaBars} from 'react-icons/all';

const Menu = [
    {
        name: "Home",
        link: "/",
        path: '/'

    },
    {
        name: "About us",
        link: "/",
        path: "/aboutUs"
    },
    {
        name: "Student Review",
        link: "/",
        path: "/review"
    },
    {
        name: "Register",
        link: "/",
        icon: <BiUser/>,
        path: "/register"
    },


]
const Navbar = () => {

    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

    const isAuthenticated = false;

    return (

        <nav className="Navbar">
            <div className="Navbar__container container">
                <div className={'Navbar__logo'}>
                    <Link to='/home'>High School</Link>
                </div>
                <div className={'Navbar__menus'}>
                    {Menu.map(el => (
                        <Link to={el.path} className='Navbar__menus_menu'>
                            {el.name}
                        </Link>))}
                </div>
                <div className={'Navbar__account'}>
                    {isAuthenticated ?
                        <div className={'Navbar__account--auth'}>Logout</div>
                        :
                        <>
                            <Link to='/signin' className={'Navbar__account--auth'}>Signin</Link>
                        </>
                    }
                </div>
                <div className="Navbar__hamburger">
                    <FaBars  onClick={() => setToggleMobileMenu(!toggleMobileMenu)}/>
                </div>
            </div>
            <div className="Navbar__menus--mobile-menus">
                {
                    toggleMobileMenu &&
                    <div className="Navbar__menus_menu">
                        {Menu.map(el => (
                            <Link to={el.path} className='Navbar__menus_menu'>
                                {el.name}
                            </Link>))}
                    </div>
                }
            </div>
        </nav>

    )
}

export default Navbar;
