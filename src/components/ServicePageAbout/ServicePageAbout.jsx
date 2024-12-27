import { typesOfService } from "../../data/data";

const ServicePageAbout = ({serviceId}) => {

    const service = typesOfService.find(item => parseInt(item.id) === parseInt(serviceId));


  return (
    <div className="flex flex-wrap ">
        <div className="flex-1 min-w-[320px]"><img src={service.serviceImg} className="w-full h-full object-cover object-center" alt="Service image" /></div>
        <div className="flex flex-1 flex-col gap-3 justify-center items-center p-10 md:p-14">
            <p className="font-Estoria text-3xl self-start">{service.serviceName}</p>
            <p className="font-Luxenta">{service.servicePara}</p>
        </div>
    </div>
  )
}

export default ServicePageAbout;