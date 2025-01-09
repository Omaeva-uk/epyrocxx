import { useParams } from "react-router-dom";
import { Footer, NavBar, ServicePageAbout, ServicePageHero } from "../../components";
import {Testimonial, Cta1} from "../../components";
import { testimonialData, typesOfService } from "../../data/data";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ServicePage = () => {

  const [serviceHover, setServiceHover] = useState(null);


  const params = useParams();
  console.log(params.id);
  
  //console.log(service);

  const otherServices = typesOfService.filter(item => item.id !== parseInt(params.id));
  console.log(otherServices);
  
  const suggestedServices = []
  otherServices.map(item => suggestedServices.push(item.serviceName));

  console.log(suggestedServices);


  //  useEffect(() => {
  
  //       const header = document.querySelector(".header-nav");
  //       const heroSection = document.querySelector(".hero-service-page");
  
  //       const observer = new IntersectionObserver((entries) => {
  //         entries.forEach(entry => {
  //           if(!entry.isIntersecting){
  //             header.classList.add("scroll-header");
  //             console.log("nav must work");
  //           }else{
  //             header.classList.remove("scroll-header");
  //           }
  //         })
  //       }, {
  
  //       });
  
  
  //       observer.observe(heroSection);
        
  //     }, []);



  return (
    <div>
      <header className='max-sm:p-4 py-0 px-14 header-nav'>
        <NavBar color="black" />
      </header>
      <section className='max-sm:p-4 p-16 py-4 mt-32 lg:mt-44 hero-service-page'>
        <ServicePageHero serviceId={params.id} />
      </section>
      <section className='max-sm:p-4 p-16 py-4 lg:mt-20'>
        <ServicePageAbout serviceId={params.id} />
      </section>
      <section className='max-sm:p-4 p-16 py-4 lg:mt-20'>
        <h2 className="font-GoodTiming text-4xl text-h2 lg:text-6xl max-w-lg mt-2 mb-6">Other Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-y-10">
              {otherServices.map((service, i) => (
                <Link data-aos="fade-up" key={i} to={`/services/${service.id}`}>
                  <div  onMouseEnter={() => setServiceHover(i)} onMouseLeave={() => setServiceHover(null)} className=" cursor-pointer border-r-2 hover:bg-action flex flex-col items-start justify-between border-black p-12 max-lg:p-2">
                    <h3 className={`${serviceHover === i && 'text-white'} font-Exo font-medium text-2xl max-lg:text-xl max-w-[280px]`}>
                      {service.serviceName}
                    </h3>
                    {/* <div className={` ${serviceHover === i && 'bg-white'} mt-6 self-end bg-action inline rounded-full p-4 max-lg:p-2 px-5 max-lg:px-3`}>
                      <i className={`${serviceHover === i ? 'text-black' : "text-white"} fa-solid  fa-arrow-right`}></i>
                    </div> */}
                  </div>
                </Link>
                
              ))}
            </div>
      </section>
      <section className='max-sm:p-4 p-16 py-4 lg:mt-20'>
        <Testimonial />
      </section>
      <section className='max-sm:p-4 p-16 py-4 lg:mt-20'>
        <Cta1 />
      </section>
      <footer className='max-sm:p-4 mt-20'>
          <Footer />
        </footer>
      
    </div>
  )
}

export default ServicePage;