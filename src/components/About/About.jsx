
import { aboutData } from "../../data/data";

const About = () => {


  return (
    <div>
      {
        aboutData.map((item, i) => (
          <div key={i} data-aos="fade-right" className="flex justify-between lg:items-center gap-10 max-lg:flex-col flex-wrap">
            <div className="flex-1 min-w-[300px]">
              <p className="font-Exo uppercase tracking-wider text-section ">{item.sectionName}</p>
              <h2 className="font-GoodTiming text-4xl text-h2 lg:text-6xl max-w-xl mt-2 mb-6">{item.sectionTitle}</h2>
              <p className="font-Exo text-gray-900">{item.sectionSubheadline}</p>
            </div>
            <div data-aos="fade-left" className="max-w-2xl flex-1 font-Exo space-y-5">
              <p>{item.sectionPara1}</p>
              <p>{item.sectionPara2}</p>
            </div>
          </div>
          
        ))
      }
        
    </div>
  )
}

export default About;