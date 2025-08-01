import { faqData } from "../../data/data";

const Faq = () => {
  return (
    <div>
      {
        faqData.map((item, i) => (
          <div data-aos="fade-up" key={i} className="flex flex-col justify-center items-center flex-wrap">
            <div className="flex flex-col justify-center items-center">
              <p className="font-Exo uppercase tracking-wider text-section ">{item.sectionName}</p>
              <h2 className="font-GoodTiming text-4xl text-center text-h2 lg:text-6xl max-w-2xl mt-2 mb-6">{item.sectionTitle}</h2>
              <p className="font-Exo text-gray-900">{item.sectionSubheadline}</p>
            </div>
            <div className="grid w-full gap-14 grid-cols-1 md:grid-cols-2 max-smd:mt-10 mt-32">
           
            {
                
                item.questions.map(item => (
                    
                        <div data-aos="fade-up" className="flex gap-6" key={item.id}>
                            <div className="w-[50px] h-[50px] flex-none self-start flex justify-center items-center border-2 border-black rounded-full">{item.id}</div>
                            <div>
                                <h3 className="font-Exo leading-tight text-[30px] max-w-md mb-3">{item.question}</h3>
                                <p className="font-Exo">{item.answer}</p>
                            </div>
                        </div>
                   
                ))
            }
            </div>
            
          </div>
          
          
        ))
      }
        
    </div>
  )
}

export default Faq;