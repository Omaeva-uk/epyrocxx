import {NavBar} from "../index.js"
import Video from "/assets/hero-video.mp4";
import "./Hero.css";
import { useEffect } from "react";
import { useState } from "react";
import Aos from "aos";
import { Boxes } from "../ui/background-boxes.jsx";

import "aos/dist/aos.css";

const Hero = () => {


  // useEffect(() => {
  //   Aos.init({
  //     duration : 1000
  //   });
  // }, []);


    const [width, setWidth] = useState(window.innerWidth);
    //console.log(width);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    //checking if its mobile or desktop
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [width]);

    const isMobile = width <= 1000;


    


    //adding split screen only on screen above 1000px
    useEffect(() => {

      const heroSection = document.querySelector(".hero");
      const navLink = document.querySelector(".nav-links");
      const navLogo = document.querySelector("#nav-logo");
      const ctaBtn = document.querySelector(".contact-us");

      function heroScroll(){

        if(isMobile){
          //console.log("hello");
          heroSection.classList.remove("shrink");
            //console.log(heroSection.classList)
            return;
        }else{
          heroSection.classList.add("shrink");
            //console.log(heroSection.classList)
            setTimeout(() => {
            navLink.classList.add("shrink-text");
            ctaBtn.classList.add("shrink-text");
            ctaBtn.classList.add("cta-bg");
            navLogo.setAttribute("src","/epyrockxx-logo-black.png");
          },800);
          }
        }
            
            


      if(isMobile){
        //console.log("mobile");
        heroSection.classList.remove("shrink");
        navLink.classList.remove("shrink-text");
            ctaBtn.classList.remove("shrink-text");
            ctaBtn.classList.remove("cta-bg");
            navLogo.setAttribute("src","/epyrockxx-logo.svg");
        //console.log(heroSection.classList)
        return () => {
          window.removeEventListener("scroll", heroScroll);
        }
      }else{
        //console.log("desktop");
        window.addEventListener("scroll", heroScroll);
        return () => {
          window.removeEventListener("scroll", heroScroll);
        }
      }
      
    }, [width])
    
          

    // useEffect(() => {

    //   const header = document.querySelector(".header-nav");
    //   const heroSection = document.querySelector(".hero");

    //   const observer = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {

    //       if(!entry.isIntersecting){
           
    //           header.classList.add("scroll-header");
    //         console.log("nav must work");
            
            
    //       }else{
    //         header.classList.remove("scroll-header");
    //       }
    //     })
    //   }, {

    //   });


    //   observer.observe(heroSection);
      
    // }, [width]);
    




  return (
    <div className="relative">
        <header className=" z-50 max-lg:px-8 header-nav ">
            <NavBar />
        </header>
        <div className="bg-black flex justify-between items-center gap-2 text-primary banner-service">We do services all over India!<img src="/india-map.png" alt="India map" /></div>
        <div className="relative hero">
        
              <div className=" overflow-hidden relative left-content left-shadow">
                {!isMobile && <Boxes />}
              <div className="flex flex-col justify-center items-center">
                  <h1 className="text-[60px] font-Kopdher max-w-3xl mt-24 text-center mx-auto leading-[100%]">
                            Seamless Strength, Industrial Toughness
                  </h1>
                  <p className=" font-Exo mt-5 text-center mx-auto max-w-lg">Durable, Stylish, and Affordable Epoxy Flooring Solutions for Every Industrial Space</p>
                  <div className="mouse"></div>
                </div>
                
              </div>
              <div className="right-content bg-blue-300 relative ">
                    <div data-aos="fade-down" className=" absolute inset-0 flex flex-col justify-center items-center -mt-40 video-text">
                  <h1  className="lg:text-[60px] md:text-[50px] text-[40px] mt-[120px]  text-h1 font-Kopdher md:max-w-xl lg:max-w-6xl text-center mx-auto leading-tight">
                            Seamless Strength, Industrial Toughness
                  </h1>
                  <p className="font-Exo text-center mx-auto text-white max-w-xl">Transforming Spaces, One Floor at a Time – Durable, Stylish, and Affordable Flooring Solutions for Every Home and Business.</p>
                </div>
                    <video autoPlay loop muted className="w-full h-full object-cover" poster="/assets/video-fallback-image.png">
                          <source src={Video} type="video/mp4" ></source>
                          hello
                    </video>
              </div>
                
            </div>
    </div>
  )
}


export default Hero