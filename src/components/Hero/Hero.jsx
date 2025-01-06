import {NavBar} from "../index.js"
import Video from "/assets/hero-video.mp4";
import "./Hero.css";
import { useEffect } from "react";
import { useState } from "react";
import Aos from "aos";

import "aos/dist/aos.css";

const Hero = () => {

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 800);

  // useEffect(() => {
  //   Aos.init({
  //     duration : 1000
  //   });
  // }, []);


    useEffect(() => {



        const heroSection = document.querySelector(".hero");
        const navLink = document.querySelector(".nav-links");
        const navLogo = document.querySelector("#nav-logo");
        const ctaBtn = document.querySelector(".contact-us");

        console.log(isDesktop);

        window.addEventListener("resize", () => {
          setIsDesktop(window.innerWidth > 800);
        });

        function scroll(){
          if(!isDesktop) return;
          if(isDesktop){
            heroSection.classList.add("shrink");
            setTimeout(() => {
              navLink.classList.add("shrink-text");
              ctaBtn.classList.add("shrink-text");
              ctaBtn.classList.add("cta-bg");
              navLogo.setAttribute("src","/epyrockxx-logo-black.png");
          },800);
          }
          
          
        }
        if(!isDesktop){
          window.removeEventListener("scroll", scroll);
          console.log("not desktop");
          heroSection.classList.remove("shrink");
          return;
        }

        if(isDesktop){
          window.addEventListener("scroll", scroll);
        }
      
    }, [isDesktop]);

    useEffect(() => {

      const header = document.querySelector(".header-nav");
      const heroSection = document.querySelector(".hero");

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if(!entry.isIntersecting){
            header.classList.add("scroll-header");
            console.log("nav must work");
          }else{
            header.classList.remove("scroll-header");
          }
        })
      }, {

      });


      observer.observe(heroSection);
      
    }, []);
    




  return (
    <div className="relative">
        <header className=" z-50 px-20 max-lg:px-8 header-nav ">
            <NavBar />
        </header>
        <div className="relative hero">
        
              <div className="left-content left-shadow">
              <div className="">
                  <h1 className="text-[60px] font-Kopdher max-w-3xl left-hero-heading text-center mx-auto leading-[100%]">
                            Seamless Strength, Industrial Toughness
                  </h1>
                  <p className="font-Luxenta mt-5 text-center mx-auto max-w-xl">Transforming Spaces, One Floor at a Time – Durable, Stylish, and Affordable Flooring Solutions for Every Home and Business.</p>
                </div>
              </div>
              <div className="right-content bg-blue-300 relative ">
                    <div data-aos="fade-down" className=" absolute inset-0 flex flex-col justify-center items-center -mt-40 video-text">
                  <h1  className="lg:text-[60px] md:text-[50px] mt-[120px]  text-h1 font-Kopdher md:max-w-xl lg:max-w-6xl text-center mx-auto leading-tight">
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