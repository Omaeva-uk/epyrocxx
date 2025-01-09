import { useEffect } from "react";
import { testimonialData, testimonials } from "../../data/data";
import "./testimonial.css";

const Testimonial = () => {

  useEffect(() => {
    const scrollContainer = document.querySelector(".testimonial-wrapper");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    scrollContainer.addEventListener("wheel", (e) => {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    });

    prev.addEventListener("click", (e) => {
      scrollContainer.scrollLeft -= 330;
    });
    next.addEventListener("click", (e) => {
      scrollContainer.scrollLeft += 330;
    });
    
  }, [])
  



  return (
    <div>
      {
        testimonialData.map((item, i) => (
          <div key={i} className="flex justify-between max-lg:flex-col-reverse lg:items-center gap-10 flex-wrap">
            <div data-aos="fade-right" className="max-w-2xl font-Exo space-y-5">
              <p>{item.sectionPara1}</p>
            </div>
            <div data-aos="fade-left">
              <p className="font-Lato uppercase tracking-wider text-section ">{item.sectionName}</p>
              <h2 className="font-GoodTiming text-4xl text-h2 lg:text-6xl max-w-lg mt-2 mb-6">{item.sectionTitle}</h2>
              <p className="font-Exo text-gray-900">{item.sectionSubheadline}</p>
            </div>
          </div>
          
        ))
      }

      <div data-aos="fade-up" className="mt-32 max-sm:mt-10 flex testimonial-wrapper p-6 pb-12 gap-8">
        {
          testimonials.map((item) => (
            <div key={item.id} className=" font-Exo flex flex-col shadow-xl justify-center items-center md:min-w-[350px] min-w-[300px]  p-8">
              <div className="w-[100px] mb-4">
                <img src={item.avatar} className="w-full" alt="Testimonees profile picture" />
              </div>
              <h3 className="text-3xl">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.title}</p>
              <p className="text-center text-sm mt-3 mb-8">{item.comment}</p>
              <div className="flex gap-1">
                <img src="/assets/testimonial-star.png" alt="testimonial-star" />
                <img src="/assets/testimonial-star.png" alt="testimonial-star" />
                <img src="/assets/testimonial-star.png" alt="testimonial-star" />
                <img src="/assets/testimonial-star.png" alt="testimonial-star" />
                <img src="/assets/testimonial-star.png" alt="testimonial-star" />
              </div>
            </div>
          ))
        }
      
      </div>
        <div className="flex justify-end gap-6">
          <button className="prev w-[82px] max-sm:w-[40px] h-[50px] max-sm:h-[25px] border border-black rounded-full">
            <i className={` fa-solid text-black fa-arrow-left`}></i>
          </button>
          <button className="next w-[82px] max-sm:w-[40px] h-[50px] max-sm:h-[25px] border border-black rounded-full">
            <i className={` fa-solid text-black fa-arrow-right`}></i>
          </button>
        </div>
      
        
    </div>
  )
}

export default Testimonial;