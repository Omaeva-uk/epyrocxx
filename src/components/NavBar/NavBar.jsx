import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "./navbar.css";
import { useEffect, useState } from "react";


const NavBar = ({color}) => {

  const [mobNav, setmobNav] = useState(false);

  function scrollNavClose(){
        setmobNav(false);
      }


  useEffect(() => {
    
    window.addEventListener("scroll", scrollNavClose );
    console.log("scroll nav");
    

  }, [mobNav])
  

  function handleNav(){
    setmobNav(!mobNav);
    console.log(mobNav);
  }


  return (
    <nav className="flex scroll-header px-10 md:px-16 lg:px-20 justify-between relative items-center font-Exo text-white">
      <Link to="/">
        <div className="w-[110px] -ml-5 h-[74px] flex justify-start items-center">
          <picture>
            <source media="(max-width:750px)" srcSet="/epyrockxx-logo.svg" />
          </picture>
          <img src={`${color ? '/epyrockxx-logo-black.png' : '/epyrockxx-logo.svg'}`} alt="Epyrockxx Logo" id="nav-logo" className="w-full nav-logo object-cover" />
        </div>     
      </Link>
      {/* Desktop nav menu */}
      <ul className={`flex justify-between items-center mr-28 ml-24 gap-10 max-md:hidden font-Exo nav-links ${color && 'text-black'}`}>
        <HashLink to="/#services"><li className="font-Exo">Services</li></HashLink>
        <HashLink to="/#projects"><li>Work</li></HashLink>
        <HashLink to="/#about-us"><li>About Us</li></HashLink>
      </ul>
      {/* Mobile nav menu */}
      {
        mobNav &&  (
      <ul className={` w-full p-2 py-6 pr-9 flex gap-2 font-Exo lg:hidden absolute mobile-nav`}>
        <HashLink to="/#services"><li>Services</li></HashLink>
        <HashLink to="/#projects"><li>Work</li></HashLink>
        <HashLink to="/#about-us"><li>About Us</li></HashLink>
      </ul>
        )
      }
      <div className="ham-menu hidden text-xl ml-auto" ><i className={`${color && 'text-black'} fa-solid fa-bars `} onClick={handleNav}></i><HashLink to="/#contact-us"><button><i className={`fa-solid text-[18px] ${color ? 'text-black' : 'text-white'}  ml-5 fa-phone`}></i></button></HashLink></div>
      <HashLink to="/#contact-us"><button className={`contact-us font-Exo ${color && 'text-black'}`}>Contact Us</button></HashLink>
    </nav>
  )
}

export default NavBar;