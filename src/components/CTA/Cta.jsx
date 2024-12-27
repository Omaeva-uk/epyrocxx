import { ctaData } from "../../data/data";
import "./cta.css";

const Cta = () => {
  return (
    <div>
    {
      ctaData.map((item, i) => (
        <div key={i}>
            <div  className="flex flex-col justify-center items-center flex-wrap">
                <div className="flex flex-col justify-center items-center">
                    <p className="font-Lato uppercase tracking-wider text-section ">{item.sectionName}</p>
                    <h2 className="font-Estoria text-4xl text-center text-h2 lg:text-6xl max-w-lg mt-2 mb-6">{item.sectionTitle}</h2>
                    <p className="font-Luxenta text-gray-900">{item.sectionSubheadline}</p>
                </div> 
            </div>
            <div className="mt-20 flex flex-wrap gap-7 justify-between text-h2 text-center">
                {item.ctaCards.map((item) => (
                    <div key={item.id} className="flex-1 p-10 flex flex-col justify-center items-center gap-3 bg-[#FABC3F]">
                        <img src={item.icon} alt={item.heading} width={50} height={50} />
                        <h4 className="max-w-xs font-Luxenta text-2xl font-semibold">{item.heading}</h4>
                        <p>{item.detail}</p>
                        
                    </div>
                ))}
            </div>
        </div>
        
        
      ))
    }

    <div className="flex justify-center max-md:flex-col mt-32 gap-14">
        <div className="flex-1">
            <img src="/assets/cta-image.png" alt="cta-image" className="w-full object-cover" />
        </div>
        <div className="flex-1">
            <form action="" className="flex h-full flex-col justify-between cta-form">
                <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" />
                <label htmlFor="email">Your Email</label>
                    <input type="text" id="email" name="email" />
                <label htmlFor="phone">Phone Number</label>
                    <input type="text" id="phone" name="phone" />
                <label htmlFor="description">Description</label>
                    <input type="text" id="description" name="description" />
                <button className="bg-action text-white font-bold font-Luxenta max-md:text-lg text-2xl rounded-lg p-3 w-full max-w-[500px]">Submit</button>
            </form>
        </div>
    </div>
      
  </div>
  )
}

export default Cta;