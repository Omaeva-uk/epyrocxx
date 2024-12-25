import { useEffect } from "react";
import "./testing.css";
import Video from "/assets/hero-video.mp4";

const Testing = () => {

useEffect(() => {
    const heroSection = document.querySelector(".hero");

    window.addEventListener("scroll", () => {
      heroSection.classList.add("shrink");
    })
 
  
}, [])



  
  return (
    <div className="relative hero">

      <div className="left-content">
      <div className="">
          <h1 className="text-[80px] font-Estoria max-w-4xl text-center mx-auto leading-tight">
                    Seamless Strength, Industrial Toughness
          </h1>
          <p className="font-Luxenta text-center mx-auto max-w-xl">Transforming Spaces, One Floor at a Time – Durable, Stylish, and Affordable Flooring Solutions for Every Home and Business.</p>
        </div>
      </div>
      <div className="right-content bg-blue-300 relative ">
            <div className=" absolute inset-0 flex flex-col justify-center items-center -mt-40 video-text">
          <h1 className="text-[90px] font-Estoria max-w-4xl text-center mx-auto text-white leading-tight">
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
    
  )
}

export default Testing;