import { ctaData } from "@/data/data";
import "./Cta1.css";
import { useState } from "react";



const Cta1 = () => {

    const [submit, setSubmit] = useState("Get your quote");
    const formKey = import.meta.env.VITE_FORM_KEY;
    // console.log(import.meta.env.VITE_FORM_KEY);

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
        //   console.log("Success", res);
        setSubmit("Submitted Successfully!")
        }
      };

    

  return (
    <div data-aos="zoom-in" className="max-w-[1000px] mx-auto border flex flex-wrap">
        <div className="flex-1 bg-[#f7f8fc] p-10 ">
            {
                ctaData.map((item, i) => (
                    <div key={i}>
                        <p className="font-Lato uppercase tracking-wider text-section ">{item.sectionName}</p>
                        <h3 className="font-GoodTiming text-4xl text-h2 lg:text-6xl max-w-lg mt-2 mb-6">{item.sectionTitle}</h3>
                        <p className="font-Exo text-gray-900">{item.sectionSubheadline}</p>
                        <div className="mt-5 flex flex-col gap-5">
                            {
                                item.ctaCards.map((card, i) => (
                                    <div key={card.id} className="flex max-sm:flex-col gap-5 max-w-sm items-start">
                                        <div className="border rounded-full p-5"><img src={card.icon} alt="contact-icon" width={card.id === 1 ? "40" : "30"} height={34} /></div>
                                        <div>
                                            <h4 className="max-w-xs font-Exo text-xl font-semibold">{card.heading}</h4>
                                            <p className="font-Exo">{card.detail}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="flex-1 p-10">
            <h3 className="text-2xl mt-10">Send us a message</h3>
            <form onSubmit={onSubmit} className="flex flex-col mt-12">
                <div className="flex justify-between flex-wrap gap-3">
                    <div className="flex-1">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="Name" required />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="company">Company</label>
                        <input type="text" id="company" name="Company" required />
                    </div>
                </div>
                <div className="flex justify-between my-6 flex-wrap gap-3">
                    <div className="flex-1">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" name="Mobile No."  required/>
                    </div>
                    <div className="flex-1">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="Email" required />
                    </div>
                </div>
                <label htmlFor="message">Message</label>
                <input type="text" id="message" name="Message" className="h-16" required/>
                <button type="submit" className="bg-action mt-4 text-white font-bold font-Luxenta max-md:text-lg text-xl rounded-lg p-3 w-full ">{submit}</button>
            </form>
        </div>
        <div></div>
    </div>
  )
}

export default Cta1;