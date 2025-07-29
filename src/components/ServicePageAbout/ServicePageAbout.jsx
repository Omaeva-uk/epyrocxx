import { typesOfService } from "../../data/data";

const ServicePageAbout = ({serviceId}) => {

    const service = typesOfService.find(item => parseInt(item.id) === parseInt(serviceId));


  return (
    <div className="flex flex-wrap ">
        <div data-aos="fade-right" className="flex-1 min-w-[320px]"><img src={service.serviceImg} className="w-full h-full object-cover object-center" alt="Service image" /></div>
        <div data-aos="fade-left" className="flex flex-1 flex-col gap-3 justify-center items-center max-md:mt-5 md:p-14">
            <p className="font-GoodTiming text-3xl self-start">{service.serviceName}</p>
            <p className="font-Exo">{service.servicePara1}</p>
            <p className="font-Exo">{service.servicePara2}</p>
        </div>
    </div>
  )
}

export default ServicePageAbout;