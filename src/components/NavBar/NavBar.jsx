import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "./navbar.css";
import { useState } from "react";


const NavBar = ({color}) => {

  const [mobNav, setmobNav] = useState(false);

  function handleNav(){
    setmobNav(!mobNav);
    console.log(mobNav);
  }


  return (
    <nav className="flex justify-between relative items-center font-Luxenta text-white">
      <Link to="/">
        <div className="w-[110px] -ml-5 h-[74px] flex justify-start items-center">
          <picture>
            <source media="(max-width:750px)" srcSet="/epyrockxx-logo.svg" />
          </picture>
          <img src={`${color ? '/epyrockxx-logo-black.png' : '/epyrockxx-logo.svg'}`} alt="Epyrockxx Logo" id="nav-logo" className="w-full nav-logo object-cover" />
        </div>     
      </Link>
      {/* Desktop nav menu */}
      <ul className={`flex justify-between items-center mr-auto ml-24 gap-6 nav-links ${color && 'text-black'}`}>
        <HashLink to="/#services"><li>Services</li></HashLink>
        <HashLink to="/#projects"><li>Work</li></HashLink>
        <HashLink to="/#about-us"><li>About Us</li></HashLink>
      </ul>
      {/* Mobile nav menu */}
      {
        mobNav &&  (
      <ul className={` w-full p-4 py-6 flex gap-4 lg:hidden absolute mobile-nav`}>
        <HashLink to="/#services"><li>Services</li></HashLink>
        <HashLink to="/#projects"><li>Work</li></HashLink>
        <HashLink to="/#about-us"><li>About Us</li></HashLink>
        <HashLink to="/#contact-us"><button>Contact Us</button></HashLink>
      </ul>
        )
      }
      <div className="md:hidden text-xl ml-auto" onClick={handleNav}><i className={`${color && 'text-black'} fa-solid fa-bars `}></i></div>
      <HashLink to="/#contact-us"><button className={`contact-us ${color && 'text-black'}`}>Contact Us</button></HashLink>
    </nav>
  )
}

export default NavBar;