import {NavBar} from "../index.js"
import Video from "/assets/hero-video.mp4";
import "./Hero.css";
import { useEffect } from "react";

const Hero = () => {


    useEffect(() => {
        const heroSection = document.querySelector(".hero");
        const navLink = document.querySelector(".nav-links");
        const navLogo = document.querySelector("#nav-logo");
    
        window.addEventListener("scroll", () => {
          heroSection.classList.add("shrink");
          setTimeout(() => {
              navLink.classList.add("shrink-text");
              navLogo.setAttribute("src","/epyrockxx-logo-black.png");
          },800);
        })
     
      
    }, []);




  return (
    <div className="relative">
        <header className=" z-50 px-20 pt-6 header-nav ">
            <NavBar />
        </header>
        <div className="relative hero">
        
              <div className="left-content">
              <div className="">
                  <h1 className="text-[60px] font-Estoria max-w-xl text-center mx-auto leading-tight">
                            Seamless Strength, Industrial Toughness
                  </h1>
                  <p className="font-Luxenta text-center mx-auto max-w-xl">Transforming Spaces, One Floor at a Time – Durable, Stylish, and Affordable Flooring Solutions for Every Home and Business.</p>
                </div>
              </div>
              <div className="right-content bg-blue-300 relative ">
                    <div className=" absolute inset-0 flex flex-col justify-center items-center -mt-40 video-text">
                  <h1 className="text-[90px] text-h1 font-Estoria max-w-4xl text-center mx-auto leading-tight">
                            Seamless Strength, Industrial Toughness
                  </h1>
                  <p className="font-Luxenta text-center mx-auto text-white max-w-xl">Transforming Spaces, One Floor at a Time – Durable, Stylish, and Affordable Flooring Solutions for Every Home and Business.</p>
                </div>
                    <video autoPlay loop muted className="w-full h-full object-cover">
                          <source src={Video} type="video/mp4" ></source>
                          hello
                    </video>
              </div>
                
            </div>
    </div>
  )
}


export default Hero