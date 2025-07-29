import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="bg-h2 text-white py-14 max-xl:px-5 px-28 font-Exo">
        <div className="flex flex-wrap gap-10 justify-between items-start">
            <div>
                <img src="/epyrockxx-logo.svg" alt="epyrocxx logo" className="-ml-[15px] mb-2"/>
                <p className="max-w-md text-[18px]">Transforming Spaces, One Floor at a Time – Durable, Stylish, and Affordable Flooring Solutions for Every Home and Business.</p>
            </div>
            <div className="flex flex-wrap gap-10">
            <div className="max-w-xs">
                <h4 className="text-[24px] mb-2">Contact Us</h4>
                <p className="text-[18px] max-w-[200px]">ATLAS HARDWARES 49, Kamaraj Road Karur - 639001</p>
                <p className="text-[18px]">+91 9442562478</p>
            </div>
            <div>
                <h4 className="mb-2 text-[24px]">Follow us</h4>
                <div className="flex gap-4">
                    <img src="/assets/social-instagram.svg" alt="Instagram Logo" />
                    <img src="/assets/social-linkedin.svg" alt="Linkedin Logo" />
                    <img src="/assets/social-twitter.svg" alt="X Logo" />
                </div>
            </div>
            </div>
            
        </div>
        <div className="flex flex-wrap justify-between items-center mt-20">
            <p>© All Rights Reserved. Epyrocxx</p>
            <p>Designed and developed by <a href="https://www.omaeva.com/" target="_blank" className=" underline">Omaeva Ltd. UK</a></p>
            <Link to="/privacy-policy">
                <p>Privacy Policy</p>
            </Link>
        </div>
    </div>
  )
}

export default Footer;