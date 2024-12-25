import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


const NavBar = () => {
  return (
    <nav className="flex justify-between items-center font-Luxenta text-white">
      <Link>
        <div className="w-[143px] h-[74px]">
          <img src="/epyrockxx-logo.svg" alt="Epyrockxx Logo" id="nav-logo" className="w-full h-full object-cover" />
        </div>     
      </Link>
      <ul className="flex justify-between items-center mr-auto ml-24 gap-6 nav-links">
        <HashLink><li>Services</li></HashLink>
        <HashLink><li>Work</li></HashLink>
        <HashLink><li>About Us</li></HashLink>
      </ul>
      <HashLink><button>Contact Us</button></HashLink>
    </nav>
  )
}

export default NavBar;