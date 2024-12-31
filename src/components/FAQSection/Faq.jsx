import { faqData } from "../../data/data";

const Faq = () => {
  return (
    <div>
      {
        faqData.map((item, i) => (
          <div key={i} className="flex flex-col justify-center items-center flex-wrap">
            <div className="flex flex-col justify-center items-center">
              <p className="font-Lato uppercase tracking-wider text-section ">{item.sectionName}</p>
              <h2 className="font-Estoria text-4xl text-center text-h2 lg:text-6xl max-w-lg mt-2 mb-6">{item.sectionTitle}</h2>
              <p className="font-Luxenta text-gray-900">{item.sectionSubheadline}</p>
            </div>
            <div className="grid w-full gap-14 grid-cols-1 md:grid-cols-2 max-smd:mt-10 mt-32">
            {console.log("Im here 1")}
            {
                
                item.questions.map(item => (
                    
                        <div className="flex gap-6" key={item.id}>
                            <div className="w-[110px] h-[50px] self-start flex justify-center items-center border-2 border-black rounded-full">{item.id}</div>
                            <div>
                                <h3 className="font-Luxenta leading-tight text-[30px] max-w-md mb-3">{item.question}</h3>
                                <p className="font-Luxenta">{item.answer}</p>
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