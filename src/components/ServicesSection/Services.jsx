import { useState } from "react";
import { servicesData } from "../../data/data";
import { Link } from "react-router-dom";

const Services = () => {


  const [serviceHover, setServiceHover] = useState(null);


  return (
    <div>
      {
        servicesData.map((item, i) => (
          <div key={i}>
            <div data-aos="fade-right" className="flex justify-between items-center gap-10 flex-wrap">
              <div className="flex-1 min-w-[300px]">
                  <img src={item.img} alt="servie-image" />    
              </div>
              <div data-aos="fade-left" className="flex-1">
                <p className="font-Exo flex-1 uppercase tracking-wider text-section">{item.sectionName}</p>
                <h2 className="font-GoodTiming text-4xl lg:text-6xl text-h2 max-w-xl mt-2 mb-6">{item.sectionTitle}</h2>
                <p className="font-Exo text-gray-900 max-w-lg">{item.sectionSubheadline}</p>
              </div>
              
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 mt-32 gap-y-10">
              {item.typesOfServce.map((service, i) => (
                <Link data-aos="fade-up" key={i} to={`/services/${i+1}`}>
                  <div  onMouseEnter={() => setServiceHover(i)} onMouseLeave={() => setServiceHover(null)} className=" cursor-pointer border-r-2 hover:bg-action flex flex-col items-start justify-between border-black p-12 max-lg:p-2">
                    <h3 className={`${serviceHover === i && 'text-white'} font-Exo font-medium text-2xl max-lg:text-xl max-w-[250px]`}>
                      {service}
                    </h3>
                    <div className={` ${serviceHover === i && 'bg-white'} mt-6 self-end bg-action inline rounded-full p-4 max-lg:p-2 px-5 max-lg:px-3`}>
                      <i className={`${serviceHover === i ? 'text-black' : "text-white"} fa-solid  fa-arrow-right`}></i>
                    </div>
                  </div>
                </Link>
                
              ))}
            </div>
          </div>
          
        ))
      }
        
    </div>
  )
}

export default Services;