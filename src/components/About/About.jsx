
import { aboutData } from "../../data/data";

const About = () => {
  return (
    <div>
      {
        aboutData.map((item, i) => (
          <div key={i} className="flex justify-between items-center flex-wrap">
            <div>
              <p className="font-Lato uppercase tracking-wider text-section ">{item.sectionName}</p>
              <h2 className="font-Estoria text-4xl text-h2 lg:text-6xl max-w-lg mt-2 mb-6">{item.sectionTitle}</h2>
              <p className="font-Luxenta text-gray-900">{item.sectionSubheadline}</p>
            </div>
            <div className="max-w-2xl font-Luxenta space-y-5">
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