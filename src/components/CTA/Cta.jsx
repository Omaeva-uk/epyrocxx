import { ctaData } from "../../data/data";
import "./cta.css";
import { PinContainer } from "../ui/3d-pin";

const Cta = () => {

    const formKey = import.meta.env.VITE_FORM_KEY;

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", formKey);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };


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
                <div className="h-[30rem] w-full flex items-center justify-center ">
                    <PinContainer
                        title=""
                        href=""
                    >
                        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                            Aceternity UI
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                            Customizable Tailwind CSS and Framer Motion Components.
                            </span>
                        </div>
                        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                        </div>
                    </PinContainer>
                </div>
            {/* <img src="/assets/cta-image.png" alt="cta-image" className="w-full object-cover" /> */}
        </div>
        <div className="flex-1">
            <form onSubmit={onSubmit} action="" className="flex h-full flex-col cta-form">
                <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" />
                <label htmlFor="email">Your Email</label>
                    <input type="text" id="email" name="email" />
                <label htmlFor="phone">Phone Number</label>
                    <input type="text" id="phone" name="phone" />
                <label htmlFor="description">Description</label>
                    <input type="text" id="description" name="description" />
                <button type="submit" className="bg-action text-white font-bold font-Luxenta max-md:text-lg text-2xl rounded-lg p-3 w-full max-w-[500px]">Submit</button>
            </form>
        </div>
    </div>
      
  </div>
  )
}

export default Cta;