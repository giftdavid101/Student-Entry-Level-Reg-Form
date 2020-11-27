import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.style.scss';
import {BiUser} from 'react-icons/all';


 const Navbar = () => {
    return (
           <div className="Navbar">
             <div className="container">
                <div>
                 <Link>
                    <span className="logo"> High School</span>
                  </Link>
                </div>

                <div className="options">
                    <Link to='/' className='nav-links'> 
                     Home
                    </Link>
                    <Link to='/' className='nav-links'> 
                     About Us
                    </Link>
                    <Link to='/' className='nav-links'> 
                      Student Reviews
                    </Link>
                    <Link to='/' className='nav-links'> 
                       Register
                    </Link>
                </div>

                  <div className="Navbar__signin">
                    
                    <Link className="">
                       <BiUser />
                       <span className="icon-title">Sign In</span>
                  
                    </Link>
                  </div>

            
              </div>
           </div>
      )
}

export default Navbar;
