import { useParams } from "react-router-dom";
import { typesOfService } from "../../data/data";

const ServicePageHero = ({serviceId}) => {
    console.log(serviceId);

    const params = useParams();
  //console.log(params.id);

  const service = typesOfService.find(item => parseInt(item.id) === parseInt(serviceId));



  return (
    <div>
          <div data-aos="fade-right" className="flex flex-wrap gap-6 lg:gap-24">
            <h1 className="lg:text-6xl text-5xl max-w-xl text-h2 font-GoodTiming">{service.serviceName}</h1>
            <div className="">
              <h3 className="text-xl font-Exo text-section uppercase tracking-widest  font-medium">Services</h3>
              <div  className="flex mt-5 max-md:flex-wrap gap-5 max-w-2xl">
                <p className="font-Exo">{service.heroPara1}</p>
                <p className="font-Exo">{service.heroPara2}</p>
              </div>
             
            </div>
          </div>
          <div data-aos="fade-left" className="flex flex-wrap max-sm:flex-col justify-between gap-8 mt-16 lg:mt-28">
            <div className="h-[150px] flex-1 border-b border-b-gray-400 pb-5"><img src={service.heroImg1} className={`w-full h-full object-cover object-center ${service.heroImg1Classname && 'object-right-bottom'}`} alt="Service image" /></div>
            <div className="h-[150px] flex-[1.2] border-b border-b-gray-400 pb-5"><img src={service.heroImg2} className={`w-full h-full object-cover object-center`}  alt="Service image" /></div>
          </div>
          <div className="flex flex-wrap font-Exo max-w-2xl mt-12 gap-7">
            {
              service.tags.map((item, id) => (
                <div key={id} className="border border-black p-3">{item}</div> 
              ))
            }
          </div>
        </div>
  )
}

export default ServicePageHero;